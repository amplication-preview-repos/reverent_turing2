import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceMetricService } from "./performanceMetric.service";
import { PerformanceMetricControllerBase } from "./base/performanceMetric.controller.base";

@swagger.ApiTags("performanceMetrics")
@common.Controller("performanceMetrics")
export class PerformanceMetricController extends PerformanceMetricControllerBase {
  constructor(protected readonly service: PerformanceMetricService) {
    super(service);
  }
}
