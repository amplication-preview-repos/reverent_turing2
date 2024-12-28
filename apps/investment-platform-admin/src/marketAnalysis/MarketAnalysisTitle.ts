import { MarketAnalysis as TMarketAnalysis } from "../api/marketAnalysis/MarketAnalysis";

export const MARKETANALYSIS_TITLE_FIELD = "analysisTitle";

export const MarketAnalysisTitle = (record: TMarketAnalysis): string => {
  return record.analysisTitle?.toString() || String(record.id);
};
