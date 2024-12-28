import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InvestorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="country" source="country" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
