import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvestmentFirmService } from "./investmentFirm.service";
import { InvestmentFirmControllerBase } from "./base/investmentFirm.controller.base";

@swagger.ApiTags("investmentFirms")
@common.Controller("investmentFirms")
export class InvestmentFirmController extends InvestmentFirmControllerBase {
  constructor(protected readonly service: InvestmentFirmService) {
    super(service);
  }
}
