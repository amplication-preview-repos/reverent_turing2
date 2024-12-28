import { Module } from "@nestjs/common";
import { MarketAnalysisModuleBase } from "./base/marketAnalysis.module.base";
import { MarketAnalysisService } from "./marketAnalysis.service";
import { MarketAnalysisController } from "./marketAnalysis.controller";
import { MarketAnalysisResolver } from "./marketAnalysis.resolver";

@Module({
  imports: [MarketAnalysisModuleBase],
  controllers: [MarketAnalysisController],
  providers: [MarketAnalysisService, MarketAnalysisResolver],
  exports: [MarketAnalysisService],
})
export class MarketAnalysisModule {}
