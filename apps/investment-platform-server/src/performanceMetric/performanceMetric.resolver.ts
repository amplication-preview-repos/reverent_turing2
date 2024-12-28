import * as graphql from "@nestjs/graphql";
import { PerformanceMetricResolverBase } from "./base/performanceMetric.resolver.base";
import { PerformanceMetric } from "./base/PerformanceMetric";
import { PerformanceMetricService } from "./performanceMetric.service";

@graphql.Resolver(() => PerformanceMetric)
export class PerformanceMetricResolver extends PerformanceMetricResolverBase {
  constructor(protected readonly service: PerformanceMetricService) {
    super(service);
  }
}
