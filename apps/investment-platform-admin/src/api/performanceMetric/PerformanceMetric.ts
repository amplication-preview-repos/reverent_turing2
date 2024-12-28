export type PerformanceMetric = {
  createdAt: Date;
  dateRecorded: Date | null;
  id: string;
  metricName: string | null;
  relatedFund: string | null;
  updatedAt: Date;
  value: number | null;
};
