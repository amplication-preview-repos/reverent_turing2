import { MarketAnalysisWhereInput } from "./MarketAnalysisWhereInput";
import { MarketAnalysisOrderByInput } from "./MarketAnalysisOrderByInput";

export type MarketAnalysisFindManyArgs = {
  where?: MarketAnalysisWhereInput;
  orderBy?: Array<MarketAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
