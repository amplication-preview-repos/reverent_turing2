import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
