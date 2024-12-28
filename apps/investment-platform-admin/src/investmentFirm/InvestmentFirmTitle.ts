import { InvestmentFirm as TInvestmentFirm } from "../api/investmentFirm/InvestmentFirm";

export const INVESTMENTFIRM_TITLE_FIELD = "name";

export const InvestmentFirmTitle = (record: TInvestmentFirm): string => {
  return record.name?.toString() || String(record.id);
};
