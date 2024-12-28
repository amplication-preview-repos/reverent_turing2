import * as graphql from "@nestjs/graphql";
import { FundResolverBase } from "./base/fund.resolver.base";
import { Fund } from "./base/Fund";
import { FundService } from "./fund.service";

@graphql.Resolver(() => Fund)
export class FundResolver extends FundResolverBase {
  constructor(protected readonly service: FundService) {
    super(service);
  }
}
