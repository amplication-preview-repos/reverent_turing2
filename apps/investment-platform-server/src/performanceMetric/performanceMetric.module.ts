import { Module } from "@nestjs/common";
import { PerformanceMetricModuleBase } from "./base/performanceMetric.module.base";
import { PerformanceMetricService } from "./performanceMetric.service";
import { PerformanceMetricController } from "./performanceMetric.controller";
import { PerformanceMetricResolver } from "./performanceMetric.resolver";

@Module({
  imports: [PerformanceMetricModuleBase],
  controllers: [PerformanceMetricController],
  providers: [PerformanceMetricService, PerformanceMetricResolver],
  exports: [PerformanceMetricService],
})
export class PerformanceMetricModule {}
