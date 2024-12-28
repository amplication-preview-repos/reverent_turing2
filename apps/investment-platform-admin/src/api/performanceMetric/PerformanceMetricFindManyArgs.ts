import { PerformanceMetricWhereInput } from "./PerformanceMetricWhereInput";
import { PerformanceMetricOrderByInput } from "./PerformanceMetricOrderByInput";

export type PerformanceMetricFindManyArgs = {
  where?: PerformanceMetricWhereInput;
  orderBy?: Array<PerformanceMetricOrderByInput>;
  skip?: number;
  take?: number;
};
