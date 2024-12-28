import { Module } from "@nestjs/common";
import { FundModuleBase } from "./base/fund.module.base";
import { FundService } from "./fund.service";
import { FundController } from "./fund.controller";
import { FundResolver } from "./fund.resolver";

@Module({
  imports: [FundModuleBase],
  controllers: [FundController],
  providers: [FundService, FundResolver],
  exports: [FundService],
})
export class FundModule {}
