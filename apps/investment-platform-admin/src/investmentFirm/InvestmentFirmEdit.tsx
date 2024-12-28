import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const InvestmentFirmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="establishedDate" source="establishedDate" />
        <TextInput label="firmType" source="firmType" />
        <TextInput label="fundsManaged" source="fundsManaged" />
        <TextInput label="name" source="name" />
        <NumberInput label="totalAssets" source="totalAssets" />
      </SimpleForm>
    </Edit>
  );
};
