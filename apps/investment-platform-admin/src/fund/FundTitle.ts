import { Fund as TFund } from "../api/fund/Fund";

export const FUND_TITLE_FIELD = "name";

export const FundTitle = (record: TFund): string => {
  return record.name?.toString() || String(record.id);
};
