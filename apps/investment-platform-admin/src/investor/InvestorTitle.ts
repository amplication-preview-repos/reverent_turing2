import { Investor as TInvestor } from "../api/investor/Investor";

export const INVESTOR_TITLE_FIELD = "localLanguageNameOfFirm";

export const InvestorTitle = (record: TInvestor): string => {
  return record.localLanguageNameOfFirm?.toString() || String(record.id);
};
