import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketAnalysisServiceBase } from "./base/marketAnalysis.service.base";

@Injectable()
export class MarketAnalysisService extends MarketAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
