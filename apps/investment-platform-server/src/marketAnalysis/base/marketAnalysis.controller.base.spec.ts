import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MarketAnalysisController } from "../marketAnalysis.controller";
import { MarketAnalysisService } from "../marketAnalysis.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analysisTitle: "exampleAnalysisTitle",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  industryFocus: "exampleIndustryFocus",
  publicationDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  analysisTitle: "exampleAnalysisTitle",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  industryFocus: "exampleIndustryFocus",
  publicationDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    analysisTitle: "exampleAnalysisTitle",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    industryFocus: "exampleIndustryFocus",
    publicationDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  analysisTitle: "exampleAnalysisTitle",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  industryFocus: "exampleIndustryFocus",
  publicationDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createMarketAnalysis() {
    return CREATE_RESULT;
  },
  marketAnalyses: () => FIND_MANY_RESULT,
  marketAnalysis: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MarketAnalysis", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MarketAnalysisService,
          useValue: service,
        },
      ],
      controllers: [MarketAnalysisController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /marketAnalyses", async () => {
    await request(app.getHttpServer())
      .post("/marketAnalyses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publicationDate: CREATE_RESULT.publicationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /marketAnalyses", async () => {
    await request(app.getHttpServer())
      .get("/marketAnalyses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          publicationDate: FIND_MANY_RESULT[0].publicationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /marketAnalyses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/marketAnalyses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /marketAnalyses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/marketAnalyses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        publicationDate: FIND_ONE_RESULT.publicationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /marketAnalyses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/marketAnalyses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        publicationDate: CREATE_RESULT.publicationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/marketAnalyses")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
