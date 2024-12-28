import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketAnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MarketAnalyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="analysisTitle" source="analysisTitle" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="industryFocus" source="industryFocus" />
        <TextField label="publicationDate" source="publicationDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
