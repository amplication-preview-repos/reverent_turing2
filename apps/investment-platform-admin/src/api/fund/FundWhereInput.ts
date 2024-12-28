import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FundWhereInput = {
  currency?: StringNullableFilter;
  id?: StringFilter;
  investmentStrategy?: StringNullableFilter;
  name?: StringNullableFilter;
  size?: FloatNullableFilter;
};
