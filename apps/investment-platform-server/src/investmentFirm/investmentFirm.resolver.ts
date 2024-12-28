import * as graphql from "@nestjs/graphql";
import { InvestmentFirmResolverBase } from "./base/investmentFirm.resolver.base";
import { InvestmentFirm } from "./base/InvestmentFirm";
import { InvestmentFirmService } from "./investmentFirm.service";

@graphql.Resolver(() => InvestmentFirm)
export class InvestmentFirmResolver extends InvestmentFirmResolverBase {
  constructor(protected readonly service: InvestmentFirmService) {
    super(service);
  }
}
