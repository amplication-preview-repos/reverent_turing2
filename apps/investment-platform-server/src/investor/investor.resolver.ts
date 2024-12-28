import * as graphql from "@nestjs/graphql";
import { InvestorResolverBase } from "./base/investor.resolver.base";
import { Investor } from "./base/Investor";
import { InvestorService } from "./investor.service";

@graphql.Resolver(() => Investor)
export class InvestorResolver extends InvestorResolverBase {
  constructor(protected readonly service: InvestorService) {
    super(service);
  }
}
