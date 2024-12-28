import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvestmentFirmWhereInput = {
  establishedDate?: DateTimeNullableFilter;
  firmType?: StringNullableFilter;
  fundsManaged?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  totalAssets?: FloatNullableFilter;
};
