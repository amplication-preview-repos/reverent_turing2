import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PerformanceMetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PerformanceMetrics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateRecorded" source="dateRecorded" />
        <TextField label="ID" source="id" />
        <TextField label="metricName" source="metricName" />
        <TextField label="relatedFund" source="relatedFund" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
