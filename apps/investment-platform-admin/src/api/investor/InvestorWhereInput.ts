import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvestorWhereInput = {
  contactNumber?: StringNullableFilter;
  country?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
