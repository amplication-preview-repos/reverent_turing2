import { FundWhereInput } from "./FundWhereInput";
import { FundOrderByInput } from "./FundOrderByInput";

export type FundFindManyArgs = {
  where?: FundWhereInput;
  orderBy?: Array<FundOrderByInput>;
  skip?: number;
  take?: number;
};
