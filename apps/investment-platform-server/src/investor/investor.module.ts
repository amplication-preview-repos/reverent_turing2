import { Module } from "@nestjs/common";
import { InvestorModuleBase } from "./base/investor.module.base";
import { InvestorService } from "./investor.service";
import { InvestorController } from "./investor.controller";
import { InvestorResolver } from "./investor.resolver";

@Module({
  imports: [InvestorModuleBase],
  controllers: [InvestorController],
  providers: [InvestorService, InvestorResolver],
  exports: [InvestorService],
})
export class InvestorModule {}
