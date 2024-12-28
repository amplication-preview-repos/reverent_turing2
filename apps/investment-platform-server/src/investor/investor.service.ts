import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvestorServiceBase } from "./base/investor.service.base";

@Injectable()
export class InvestorService extends InvestorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
