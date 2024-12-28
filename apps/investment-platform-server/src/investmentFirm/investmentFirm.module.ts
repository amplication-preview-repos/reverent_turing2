import { Module } from "@nestjs/common";
import { InvestmentFirmModuleBase } from "./base/investmentFirm.module.base";
import { InvestmentFirmService } from "./investmentFirm.service";
import { InvestmentFirmController } from "./investmentFirm.controller";
import { InvestmentFirmResolver } from "./investmentFirm.resolver";

@Module({
  imports: [InvestmentFirmModuleBase],
  controllers: [InvestmentFirmController],
  providers: [InvestmentFirmService, InvestmentFirmResolver],
  exports: [InvestmentFirmService],
})
export class InvestmentFirmModule {}
