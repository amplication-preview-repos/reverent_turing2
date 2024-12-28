import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const InvestmentFirmCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="establishedDate" source="establishedDate" />
        <TextInput label="firmType" source="firmType" />
        <TextInput label="fundsManaged" source="fundsManaged" />
        <TextInput label="name" source="name" />
        <NumberInput label="totalAssets" source="totalAssets" />
      </SimpleForm>
    </Create>
  );
};
