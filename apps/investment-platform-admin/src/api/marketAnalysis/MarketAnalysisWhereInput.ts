import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MarketAnalysisWhereInput = {
  analysisTitle?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  industryFocus?: StringNullableFilter;
  publicationDate?: DateTimeNullableFilter;
};
