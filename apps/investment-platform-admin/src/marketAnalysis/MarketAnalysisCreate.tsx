import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MarketAnalysisCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="analysisTitle" source="analysisTitle" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="industryFocus" source="industryFocus" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
      </SimpleForm>
    </Create>
  );
};
