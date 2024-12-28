import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InvestorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="country" source="country" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
