import { SortOrder } from "../../util/SortOrder";

export type FundOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  investmentStrategy?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
