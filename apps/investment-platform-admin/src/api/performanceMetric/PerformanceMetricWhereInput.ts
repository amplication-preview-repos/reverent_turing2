import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PerformanceMetricWhereInput = {
  dateRecorded?: DateTimeNullableFilter;
  id?: StringFilter;
  metricName?: StringNullableFilter;
  relatedFund?: StringNullableFilter;
  value?: FloatNullableFilter;
};
