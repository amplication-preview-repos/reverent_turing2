import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundService } from "./fund.service";
import { FundControllerBase } from "./base/fund.controller.base";

@swagger.ApiTags("funds")
@common.Controller("funds")
export class FundController extends FundControllerBase {
  constructor(protected readonly service: FundService) {
    super(service);
  }
}
