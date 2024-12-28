import * as graphql from "@nestjs/graphql";
import { MarketAnalysisResolverBase } from "./base/marketAnalysis.resolver.base";
import { MarketAnalysis } from "./base/MarketAnalysis";
import { MarketAnalysisService } from "./marketAnalysis.service";

@graphql.Resolver(() => MarketAnalysis)
export class MarketAnalysisResolver extends MarketAnalysisResolverBase {
  constructor(protected readonly service: MarketAnalysisService) {
    super(service);
  }
}
