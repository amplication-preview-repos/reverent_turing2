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
import { PerformanceMetricController } from "../performanceMetric.controller";
import { PerformanceMetricService } from "../performanceMetric.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateRecorded: new Date(),
  id: "exampleId",
  metricName: "exampleMetricName",
  relatedFund: "exampleRelatedFund",
  updatedAt: new Date(),
  value: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateRecorded: new Date(),
  id: "exampleId",
  metricName: "exampleMetricName",
  relatedFund: "exampleRelatedFund",
  updatedAt: new Date(),
  value: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateRecorded: new Date(),
    id: "exampleId",
    metricName: "exampleMetricName",
    relatedFund: "exampleRelatedFund",
    updatedAt: new Date(),
    value: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateRecorded: new Date(),
  id: "exampleId",
  metricName: "exampleMetricName",
  relatedFund: "exampleRelatedFund",
  updatedAt: new Date(),
  value: 42.42,
};

const service = {
  createPerformanceMetric() {
    return CREATE_RESULT;
  },
  performanceMetrics: () => FIND_MANY_RESULT,
  performanceMetric: ({ where }: { where: { id: string } }) => {
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

describe("PerformanceMetric", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PerformanceMetricService,
          useValue: service,
        },
      ],
      controllers: [PerformanceMetricController],
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

  test("POST /performanceMetrics", async () => {
    await request(app.getHttpServer())
      .post("/performanceMetrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateRecorded: CREATE_RESULT.dateRecorded.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /performanceMetrics", async () => {
    await request(app.getHttpServer())
      .get("/performanceMetrics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateRecorded: FIND_MANY_RESULT[0].dateRecorded.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /performanceMetrics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/performanceMetrics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /performanceMetrics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/performanceMetrics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateRecorded: FIND_ONE_RESULT.dateRecorded.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /performanceMetrics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/performanceMetrics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateRecorded: CREATE_RESULT.dateRecorded.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/performanceMetrics")
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
