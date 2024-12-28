import { Investor as TInvestor } from "../api/investor/Investor";

export const INVESTOR_TITLE_FIELD = "name";

export const InvestorTitle = (record: TInvestor): string => {
  return record.name?.toString() || String(record.id);
};
