import { SortOrder } from "../../util/SortOrder";

export type PerformanceMetricOrderByInput = {
  createdAt?: SortOrder;
  dateRecorded?: SortOrder;
  id?: SortOrder;
  metricName?: SortOrder;
  relatedFund?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
