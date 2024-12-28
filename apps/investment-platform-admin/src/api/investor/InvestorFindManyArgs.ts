import { InvestorWhereInput } from "./InvestorWhereInput";
import { InvestorOrderByInput } from "./InvestorOrderByInput";

export type InvestorFindManyArgs = {
  where?: InvestorWhereInput;
  orderBy?: Array<InvestorOrderByInput>;
  skip?: number;
  take?: number;
};
