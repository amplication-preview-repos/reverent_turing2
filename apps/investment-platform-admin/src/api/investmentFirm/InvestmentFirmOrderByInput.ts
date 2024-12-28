import { SortOrder } from "../../util/SortOrder";

export type InvestmentFirmOrderByInput = {
  createdAt?: SortOrder;
  establishedDate?: SortOrder;
  firmType?: SortOrder;
  fundsManaged?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalAssets?: SortOrder;
  updatedAt?: SortOrder;
};
