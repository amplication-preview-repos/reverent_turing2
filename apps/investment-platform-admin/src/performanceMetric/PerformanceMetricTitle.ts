import { PerformanceMetric as TPerformanceMetric } from "../api/performanceMetric/PerformanceMetric";

export const PERFORMANCEMETRIC_TITLE_FIELD = "metricName";

export const PerformanceMetricTitle = (record: TPerformanceMetric): string => {
  return record.metricName?.toString() || String(record.id);
};
