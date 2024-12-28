import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvestmentFirmServiceBase } from "./base/investmentFirm.service.base";

@Injectable()
export class InvestmentFirmService extends InvestmentFirmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
