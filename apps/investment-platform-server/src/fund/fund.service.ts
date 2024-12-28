import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundServiceBase } from "./base/fund.service.base";

@Injectable()
export class FundService extends FundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
