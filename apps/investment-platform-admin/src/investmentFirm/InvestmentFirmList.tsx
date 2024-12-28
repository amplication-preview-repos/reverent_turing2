import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvestmentFirmList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InvestmentFirms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="establishedDate" source="establishedDate" />
        <TextField label="firmType" source="firmType" />
        <TextField label="fundsManaged" source="fundsManaged" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="totalAssets" source="totalAssets" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
