import { SortOrder } from "../../util/SortOrder";

export type InvestorOrderByInput = {
  contactNumber?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
