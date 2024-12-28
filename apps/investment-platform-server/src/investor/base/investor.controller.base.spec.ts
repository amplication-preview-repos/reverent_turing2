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
import { InvestorController } from "../investor.controller";
import { InvestorService } from "../investor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aboutDescriptionOfFirm: "exampleAboutDescriptionOfFirm",
  assetsAllocatedToAlternativesEuros: 42.42,
  assetsAllocatedToAlternativesLocalCurrency: 42.42,
  assetsAllocatedToAlternativesPercentage: 42.42,
  assetsAllocatedToAlternativesUsDollars: 42.42,
  assetsAllocatedToCashEuros: 42.42,
  assetsAllocatedToCashLocalCurrency: 42.42,
  assetsAllocatedToCashPercentage: 42.42,
  assetsAllocatedToCashUsDollars: 42.42,
  assetsAllocatedToEquitiesEuros: 42.42,
  assetsAllocatedToEquitiesLocalCurrency: 42.42,
  assetsAllocatedToEquitiesPercentage: 42.42,
  assetsAllocatedToEquitiesUsDollars: 42.42,
  assetsAllocatedToFixedIncomeEuros: 42.42,
  assetsAllocatedToFixedIncomeLocalCurrency: 42.42,
  assetsAllocatedToFixedIncomePercentage: 42.42,
  assetsAllocatedToFixedIncomeUsDollars: 42.42,
  assetsAllocatedToOtherEuros: 42.42,
  assetsAllocatedToOtherLocalCurrency: 42.42,
  assetsAllocatedToOtherPercentage: 42.42,
  assetsAllocatedToOtherUsDollars: 42.42,
  assetsUnderManagementInEuros: 42.42,
  assetsUnderManagementInInvestorCurrency: 42.42,
  assetsUnderManagementInUsDollars: 42.42,
  cityFirmsMainOffice: "exampleCityFirmsMainOffice",
  contactNumber: "exampleContactNumber",
  country: "exampleCountry",
  countryFirmsMainOffice: "exampleCountryFirmsMainOffice",
  createdAt: new Date(),
  currencyFirmInvestsIn: "exampleCurrencyFirmInvestsIn",
  email: "exampleEmail",
  emailAddressOfFirm: "exampleEmailAddressOfFirm",
  faxNumberOfFirm: "exampleFaxNumberOfFirm",
  firmsGeneralInvestmentConsultant: "exampleFirmsGeneralInvestmentConsultant",
  id: "exampleId",
  localLanguageNameOfFirm: "exampleLocalLanguageNameOfFirm",
  maximumTargetAllocationToAlternativesEuros: 42.42,
  maximumTargetAllocationToAlternativesLocalCurrency: 42.42,
  maximumTargetAllocationToAlternativesPercentage: 42.42,
  maximumTargetAllocationToAlternativesUsDollars: 42.42,
  maximumTargetAllocationToCashEuros: 42.42,
  maximumTargetAllocationToCashLocalCurrency: 42.42,
  maximumTargetAllocationToCashPercentage: 42.42,
  maximumTargetAllocationToCashUsDollars: 42.42,
  maximumTargetAllocationToEquitiesEuros: 42.42,
  maximumTargetAllocationToEquitiesLocalCurrency: 42.42,
  maximumTargetAllocationToEquitiesPercentage: 42.42,
  maximumTargetAllocationToEquitiesUsDollars: 42.42,
  maximumTargetAllocationToFixedIncomeEuros: 42.42,
  maximumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  maximumTargetAllocationToFixedIncomePercentage: 42.42,
  maximumTargetAllocationToFixedIncomeUsDollars: 42.42,
  maximumTargetAllocationToOtherEuros: 42.42,
  maximumTargetAllocationToOtherLocalCurrency: 42.42,
  maximumTargetAllocationToOtherPercentage: 42.42,
  maximumTargetAllocationToOtherUsDollars: 42.42,
  minimumTargetAllocationToAlternativesEuros: 42.42,
  minimumTargetAllocationToAlternativesLocalCurrency: 42.42,
  minimumTargetAllocationToAlternativesPercentage: 42.42,
  minimumTargetAllocationToAlternativesUsDollars: 42.42,
  minimumTargetAllocationToCashEuros: 42.42,
  minimumTargetAllocationToCashLocalCurrency: 42.42,
  minimumTargetAllocationToCashPercentage: 42.42,
  minimumTargetAllocationToCashUsDollars: 42.42,
  minimumTargetAllocationToEquitiesEuros: 42.42,
  minimumTargetAllocationToEquitiesLocalCurrency: 42.42,
  minimumTargetAllocationToEquitiesPercentage: 42.42,
  minimumTargetAllocationToEquitiesUsDollars: 42.42,
  minimumTargetAllocationToFixedIncomeEuros: 42.42,
  minimumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  minimumTargetAllocationToFixedIncomePercentage: 42.42,
  minimumTargetAllocationToFixedIncomeUsDollars: 42.42,
  minimumTargetAllocationToOtherEuros: 42.42,
  minimumTargetAllocationToOtherLocalCurrency: 42.42,
  minimumTargetAllocationToOtherPercentage: 42.42,
  minimumTargetAllocationToOtherUsDollars: 42.42,
  name: "exampleName",
  nameOfFirm: "exampleNameOfFirm",
  numberOfKnownInvestmentsMade: 42,
  regionFirmsMainOffice: "exampleRegionFirmsMainOffice",
  secondaryOfficeLocationsOfFirm: "exampleSecondaryOfficeLocationsOfFirm",
  stateOrCountyOfFirmsMainOffice: "exampleStateOrCountyOfFirmsMainOffice",
  streetAddressOfFirm: "exampleStreetAddressOfFirm",
  telephoneNumberOfFirm: "exampleTelephoneNumberOfFirm",
  uniqueFirmIdentifier: "exampleUniqueFirmIdentifier",
  updatedAt: new Date(),
  websiteOfFirm: "exampleWebsiteOfFirm",
  yearFirmWasEstablished: 42,
  zipCodeOfFirmsMainOffice: "exampleZipCodeOfFirmsMainOffice",
};
const CREATE_RESULT = {
  aboutDescriptionOfFirm: "exampleAboutDescriptionOfFirm",
  assetsAllocatedToAlternativesEuros: 42.42,
  assetsAllocatedToAlternativesLocalCurrency: 42.42,
  assetsAllocatedToAlternativesPercentage: 42.42,
  assetsAllocatedToAlternativesUsDollars: 42.42,
  assetsAllocatedToCashEuros: 42.42,
  assetsAllocatedToCashLocalCurrency: 42.42,
  assetsAllocatedToCashPercentage: 42.42,
  assetsAllocatedToCashUsDollars: 42.42,
  assetsAllocatedToEquitiesEuros: 42.42,
  assetsAllocatedToEquitiesLocalCurrency: 42.42,
  assetsAllocatedToEquitiesPercentage: 42.42,
  assetsAllocatedToEquitiesUsDollars: 42.42,
  assetsAllocatedToFixedIncomeEuros: 42.42,
  assetsAllocatedToFixedIncomeLocalCurrency: 42.42,
  assetsAllocatedToFixedIncomePercentage: 42.42,
  assetsAllocatedToFixedIncomeUsDollars: 42.42,
  assetsAllocatedToOtherEuros: 42.42,
  assetsAllocatedToOtherLocalCurrency: 42.42,
  assetsAllocatedToOtherPercentage: 42.42,
  assetsAllocatedToOtherUsDollars: 42.42,
  assetsUnderManagementInEuros: 42.42,
  assetsUnderManagementInInvestorCurrency: 42.42,
  assetsUnderManagementInUsDollars: 42.42,
  cityFirmsMainOffice: "exampleCityFirmsMainOffice",
  contactNumber: "exampleContactNumber",
  country: "exampleCountry",
  countryFirmsMainOffice: "exampleCountryFirmsMainOffice",
  createdAt: new Date(),
  currencyFirmInvestsIn: "exampleCurrencyFirmInvestsIn",
  email: "exampleEmail",
  emailAddressOfFirm: "exampleEmailAddressOfFirm",
  faxNumberOfFirm: "exampleFaxNumberOfFirm",
  firmsGeneralInvestmentConsultant: "exampleFirmsGeneralInvestmentConsultant",
  id: "exampleId",
  localLanguageNameOfFirm: "exampleLocalLanguageNameOfFirm",
  maximumTargetAllocationToAlternativesEuros: 42.42,
  maximumTargetAllocationToAlternativesLocalCurrency: 42.42,
  maximumTargetAllocationToAlternativesPercentage: 42.42,
  maximumTargetAllocationToAlternativesUsDollars: 42.42,
  maximumTargetAllocationToCashEuros: 42.42,
  maximumTargetAllocationToCashLocalCurrency: 42.42,
  maximumTargetAllocationToCashPercentage: 42.42,
  maximumTargetAllocationToCashUsDollars: 42.42,
  maximumTargetAllocationToEquitiesEuros: 42.42,
  maximumTargetAllocationToEquitiesLocalCurrency: 42.42,
  maximumTargetAllocationToEquitiesPercentage: 42.42,
  maximumTargetAllocationToEquitiesUsDollars: 42.42,
  maximumTargetAllocationToFixedIncomeEuros: 42.42,
  maximumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  maximumTargetAllocationToFixedIncomePercentage: 42.42,
  maximumTargetAllocationToFixedIncomeUsDollars: 42.42,
  maximumTargetAllocationToOtherEuros: 42.42,
  maximumTargetAllocationToOtherLocalCurrency: 42.42,
  maximumTargetAllocationToOtherPercentage: 42.42,
  maximumTargetAllocationToOtherUsDollars: 42.42,
  minimumTargetAllocationToAlternativesEuros: 42.42,
  minimumTargetAllocationToAlternativesLocalCurrency: 42.42,
  minimumTargetAllocationToAlternativesPercentage: 42.42,
  minimumTargetAllocationToAlternativesUsDollars: 42.42,
  minimumTargetAllocationToCashEuros: 42.42,
  minimumTargetAllocationToCashLocalCurrency: 42.42,
  minimumTargetAllocationToCashPercentage: 42.42,
  minimumTargetAllocationToCashUsDollars: 42.42,
  minimumTargetAllocationToEquitiesEuros: 42.42,
  minimumTargetAllocationToEquitiesLocalCurrency: 42.42,
  minimumTargetAllocationToEquitiesPercentage: 42.42,
  minimumTargetAllocationToEquitiesUsDollars: 42.42,
  minimumTargetAllocationToFixedIncomeEuros: 42.42,
  minimumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  minimumTargetAllocationToFixedIncomePercentage: 42.42,
  minimumTargetAllocationToFixedIncomeUsDollars: 42.42,
  minimumTargetAllocationToOtherEuros: 42.42,
  minimumTargetAllocationToOtherLocalCurrency: 42.42,
  minimumTargetAllocationToOtherPercentage: 42.42,
  minimumTargetAllocationToOtherUsDollars: 42.42,
  name: "exampleName",
  nameOfFirm: "exampleNameOfFirm",
  numberOfKnownInvestmentsMade: 42,
  regionFirmsMainOffice: "exampleRegionFirmsMainOffice",
  secondaryOfficeLocationsOfFirm: "exampleSecondaryOfficeLocationsOfFirm",
  stateOrCountyOfFirmsMainOffice: "exampleStateOrCountyOfFirmsMainOffice",
  streetAddressOfFirm: "exampleStreetAddressOfFirm",
  telephoneNumberOfFirm: "exampleTelephoneNumberOfFirm",
  uniqueFirmIdentifier: "exampleUniqueFirmIdentifier",
  updatedAt: new Date(),
  websiteOfFirm: "exampleWebsiteOfFirm",
  yearFirmWasEstablished: 42,
  zipCodeOfFirmsMainOffice: "exampleZipCodeOfFirmsMainOffice",
};
const FIND_MANY_RESULT = [
  {
    aboutDescriptionOfFirm: "exampleAboutDescriptionOfFirm",
    assetsAllocatedToAlternativesEuros: 42.42,
    assetsAllocatedToAlternativesLocalCurrency: 42.42,
    assetsAllocatedToAlternativesPercentage: 42.42,
    assetsAllocatedToAlternativesUsDollars: 42.42,
    assetsAllocatedToCashEuros: 42.42,
    assetsAllocatedToCashLocalCurrency: 42.42,
    assetsAllocatedToCashPercentage: 42.42,
    assetsAllocatedToCashUsDollars: 42.42,
    assetsAllocatedToEquitiesEuros: 42.42,
    assetsAllocatedToEquitiesLocalCurrency: 42.42,
    assetsAllocatedToEquitiesPercentage: 42.42,
    assetsAllocatedToEquitiesUsDollars: 42.42,
    assetsAllocatedToFixedIncomeEuros: 42.42,
    assetsAllocatedToFixedIncomeLocalCurrency: 42.42,
    assetsAllocatedToFixedIncomePercentage: 42.42,
    assetsAllocatedToFixedIncomeUsDollars: 42.42,
    assetsAllocatedToOtherEuros: 42.42,
    assetsAllocatedToOtherLocalCurrency: 42.42,
    assetsAllocatedToOtherPercentage: 42.42,
    assetsAllocatedToOtherUsDollars: 42.42,
    assetsUnderManagementInEuros: 42.42,
    assetsUnderManagementInInvestorCurrency: 42.42,
    assetsUnderManagementInUsDollars: 42.42,
    cityFirmsMainOffice: "exampleCityFirmsMainOffice",
    contactNumber: "exampleContactNumber",
    country: "exampleCountry",
    countryFirmsMainOffice: "exampleCountryFirmsMainOffice",
    createdAt: new Date(),
    currencyFirmInvestsIn: "exampleCurrencyFirmInvestsIn",
    email: "exampleEmail",
    emailAddressOfFirm: "exampleEmailAddressOfFirm",
    faxNumberOfFirm: "exampleFaxNumberOfFirm",
    firmsGeneralInvestmentConsultant: "exampleFirmsGeneralInvestmentConsultant",
    id: "exampleId",
    localLanguageNameOfFirm: "exampleLocalLanguageNameOfFirm",
    maximumTargetAllocationToAlternativesEuros: 42.42,
    maximumTargetAllocationToAlternativesLocalCurrency: 42.42,
    maximumTargetAllocationToAlternativesPercentage: 42.42,
    maximumTargetAllocationToAlternativesUsDollars: 42.42,
    maximumTargetAllocationToCashEuros: 42.42,
    maximumTargetAllocationToCashLocalCurrency: 42.42,
    maximumTargetAllocationToCashPercentage: 42.42,
    maximumTargetAllocationToCashUsDollars: 42.42,
    maximumTargetAllocationToEquitiesEuros: 42.42,
    maximumTargetAllocationToEquitiesLocalCurrency: 42.42,
    maximumTargetAllocationToEquitiesPercentage: 42.42,
    maximumTargetAllocationToEquitiesUsDollars: 42.42,
    maximumTargetAllocationToFixedIncomeEuros: 42.42,
    maximumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
    maximumTargetAllocationToFixedIncomePercentage: 42.42,
    maximumTargetAllocationToFixedIncomeUsDollars: 42.42,
    maximumTargetAllocationToOtherEuros: 42.42,
    maximumTargetAllocationToOtherLocalCurrency: 42.42,
    maximumTargetAllocationToOtherPercentage: 42.42,
    maximumTargetAllocationToOtherUsDollars: 42.42,
    minimumTargetAllocationToAlternativesEuros: 42.42,
    minimumTargetAllocationToAlternativesLocalCurrency: 42.42,
    minimumTargetAllocationToAlternativesPercentage: 42.42,
    minimumTargetAllocationToAlternativesUsDollars: 42.42,
    minimumTargetAllocationToCashEuros: 42.42,
    minimumTargetAllocationToCashLocalCurrency: 42.42,
    minimumTargetAllocationToCashPercentage: 42.42,
    minimumTargetAllocationToCashUsDollars: 42.42,
    minimumTargetAllocationToEquitiesEuros: 42.42,
    minimumTargetAllocationToEquitiesLocalCurrency: 42.42,
    minimumTargetAllocationToEquitiesPercentage: 42.42,
    minimumTargetAllocationToEquitiesUsDollars: 42.42,
    minimumTargetAllocationToFixedIncomeEuros: 42.42,
    minimumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
    minimumTargetAllocationToFixedIncomePercentage: 42.42,
    minimumTargetAllocationToFixedIncomeUsDollars: 42.42,
    minimumTargetAllocationToOtherEuros: 42.42,
    minimumTargetAllocationToOtherLocalCurrency: 42.42,
    minimumTargetAllocationToOtherPercentage: 42.42,
    minimumTargetAllocationToOtherUsDollars: 42.42,
    name: "exampleName",
    nameOfFirm: "exampleNameOfFirm",
    numberOfKnownInvestmentsMade: 42,
    regionFirmsMainOffice: "exampleRegionFirmsMainOffice",
    secondaryOfficeLocationsOfFirm: "exampleSecondaryOfficeLocationsOfFirm",
    stateOrCountyOfFirmsMainOffice: "exampleStateOrCountyOfFirmsMainOffice",
    streetAddressOfFirm: "exampleStreetAddressOfFirm",
    telephoneNumberOfFirm: "exampleTelephoneNumberOfFirm",
    uniqueFirmIdentifier: "exampleUniqueFirmIdentifier",
    updatedAt: new Date(),
    websiteOfFirm: "exampleWebsiteOfFirm",
    yearFirmWasEstablished: 42,
    zipCodeOfFirmsMainOffice: "exampleZipCodeOfFirmsMainOffice",
  },
];
const FIND_ONE_RESULT = {
  aboutDescriptionOfFirm: "exampleAboutDescriptionOfFirm",
  assetsAllocatedToAlternativesEuros: 42.42,
  assetsAllocatedToAlternativesLocalCurrency: 42.42,
  assetsAllocatedToAlternativesPercentage: 42.42,
  assetsAllocatedToAlternativesUsDollars: 42.42,
  assetsAllocatedToCashEuros: 42.42,
  assetsAllocatedToCashLocalCurrency: 42.42,
  assetsAllocatedToCashPercentage: 42.42,
  assetsAllocatedToCashUsDollars: 42.42,
  assetsAllocatedToEquitiesEuros: 42.42,
  assetsAllocatedToEquitiesLocalCurrency: 42.42,
  assetsAllocatedToEquitiesPercentage: 42.42,
  assetsAllocatedToEquitiesUsDollars: 42.42,
  assetsAllocatedToFixedIncomeEuros: 42.42,
  assetsAllocatedToFixedIncomeLocalCurrency: 42.42,
  assetsAllocatedToFixedIncomePercentage: 42.42,
  assetsAllocatedToFixedIncomeUsDollars: 42.42,
  assetsAllocatedToOtherEuros: 42.42,
  assetsAllocatedToOtherLocalCurrency: 42.42,
  assetsAllocatedToOtherPercentage: 42.42,
  assetsAllocatedToOtherUsDollars: 42.42,
  assetsUnderManagementInEuros: 42.42,
  assetsUnderManagementInInvestorCurrency: 42.42,
  assetsUnderManagementInUsDollars: 42.42,
  cityFirmsMainOffice: "exampleCityFirmsMainOffice",
  contactNumber: "exampleContactNumber",
  country: "exampleCountry",
  countryFirmsMainOffice: "exampleCountryFirmsMainOffice",
  createdAt: new Date(),
  currencyFirmInvestsIn: "exampleCurrencyFirmInvestsIn",
  email: "exampleEmail",
  emailAddressOfFirm: "exampleEmailAddressOfFirm",
  faxNumberOfFirm: "exampleFaxNumberOfFirm",
  firmsGeneralInvestmentConsultant: "exampleFirmsGeneralInvestmentConsultant",
  id: "exampleId",
  localLanguageNameOfFirm: "exampleLocalLanguageNameOfFirm",
  maximumTargetAllocationToAlternativesEuros: 42.42,
  maximumTargetAllocationToAlternativesLocalCurrency: 42.42,
  maximumTargetAllocationToAlternativesPercentage: 42.42,
  maximumTargetAllocationToAlternativesUsDollars: 42.42,
  maximumTargetAllocationToCashEuros: 42.42,
  maximumTargetAllocationToCashLocalCurrency: 42.42,
  maximumTargetAllocationToCashPercentage: 42.42,
  maximumTargetAllocationToCashUsDollars: 42.42,
  maximumTargetAllocationToEquitiesEuros: 42.42,
  maximumTargetAllocationToEquitiesLocalCurrency: 42.42,
  maximumTargetAllocationToEquitiesPercentage: 42.42,
  maximumTargetAllocationToEquitiesUsDollars: 42.42,
  maximumTargetAllocationToFixedIncomeEuros: 42.42,
  maximumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  maximumTargetAllocationToFixedIncomePercentage: 42.42,
  maximumTargetAllocationToFixedIncomeUsDollars: 42.42,
  maximumTargetAllocationToOtherEuros: 42.42,
  maximumTargetAllocationToOtherLocalCurrency: 42.42,
  maximumTargetAllocationToOtherPercentage: 42.42,
  maximumTargetAllocationToOtherUsDollars: 42.42,
  minimumTargetAllocationToAlternativesEuros: 42.42,
  minimumTargetAllocationToAlternativesLocalCurrency: 42.42,
  minimumTargetAllocationToAlternativesPercentage: 42.42,
  minimumTargetAllocationToAlternativesUsDollars: 42.42,
  minimumTargetAllocationToCashEuros: 42.42,
  minimumTargetAllocationToCashLocalCurrency: 42.42,
  minimumTargetAllocationToCashPercentage: 42.42,
  minimumTargetAllocationToCashUsDollars: 42.42,
  minimumTargetAllocationToEquitiesEuros: 42.42,
  minimumTargetAllocationToEquitiesLocalCurrency: 42.42,
  minimumTargetAllocationToEquitiesPercentage: 42.42,
  minimumTargetAllocationToEquitiesUsDollars: 42.42,
  minimumTargetAllocationToFixedIncomeEuros: 42.42,
  minimumTargetAllocationToFixedIncomeLocalCurrency: 42.42,
  minimumTargetAllocationToFixedIncomePercentage: 42.42,
  minimumTargetAllocationToFixedIncomeUsDollars: 42.42,
  minimumTargetAllocationToOtherEuros: 42.42,
  minimumTargetAllocationToOtherLocalCurrency: 42.42,
  minimumTargetAllocationToOtherPercentage: 42.42,
  minimumTargetAllocationToOtherUsDollars: 42.42,
  name: "exampleName",
  nameOfFirm: "exampleNameOfFirm",
  numberOfKnownInvestmentsMade: 42,
  regionFirmsMainOffice: "exampleRegionFirmsMainOffice",
  secondaryOfficeLocationsOfFirm: "exampleSecondaryOfficeLocationsOfFirm",
  stateOrCountyOfFirmsMainOffice: "exampleStateOrCountyOfFirmsMainOffice",
  streetAddressOfFirm: "exampleStreetAddressOfFirm",
  telephoneNumberOfFirm: "exampleTelephoneNumberOfFirm",
  uniqueFirmIdentifier: "exampleUniqueFirmIdentifier",
  updatedAt: new Date(),
  websiteOfFirm: "exampleWebsiteOfFirm",
  yearFirmWasEstablished: 42,
  zipCodeOfFirmsMainOffice: "exampleZipCodeOfFirmsMainOffice",
};

const service = {
  createInvestor() {
    return CREATE_RESULT;
  },
  investors: () => FIND_MANY_RESULT,
  investor: ({ where }: { where: { id: string } }) => {
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

describe("Investor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InvestorService,
          useValue: service,
        },
      ],
      controllers: [InvestorController],
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

  test("POST /investors", async () => {
    await request(app.getHttpServer())
      .post("/investors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /investors", async () => {
    await request(app.getHttpServer())
      .get("/investors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /investors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/investors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /investors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/investors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /investors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/investors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/investors")
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
