import { InvestmentFirmWhereInput } from "./InvestmentFirmWhereInput";
import { InvestmentFirmOrderByInput } from "./InvestmentFirmOrderByInput";

export type InvestmentFirmFindManyArgs = {
  where?: InvestmentFirmWhereInput;
  orderBy?: Array<InvestmentFirmOrderByInput>;
  skip?: number;
  take?: number;
};
