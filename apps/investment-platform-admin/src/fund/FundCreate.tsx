import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FundCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <TextInput
          label="investmentStrategy"
          multiline
          source="investmentStrategy"
        />
        <TextInput label="name" source="name" />
        <NumberInput label="size" source="size" />
      </SimpleForm>
    </Create>
  );
};
