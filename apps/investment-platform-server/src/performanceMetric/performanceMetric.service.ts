import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceMetricServiceBase } from "./base/performanceMetric.service.base";

@Injectable()
export class PerformanceMetricService extends PerformanceMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
