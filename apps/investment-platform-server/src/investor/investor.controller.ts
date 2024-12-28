import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvestorService } from "./investor.service";
import { InvestorControllerBase } from "./base/investor.controller.base";

@swagger.ApiTags("investors")
@common.Controller("investors")
export class InvestorController extends InvestorControllerBase {
  constructor(protected readonly service: InvestorService) {
    super(service);
  }
}
