import { SortOrder } from "../../util/SortOrder";

export type MarketAnalysisOrderByInput = {
  analysisTitle?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  industryFocus?: SortOrder;
  publicationDate?: SortOrder;
  updatedAt?: SortOrder;
};
