import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MarketAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="analysisTitle" source="analysisTitle" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="industryFocus" source="industryFocus" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
      </SimpleForm>
    </Edit>
  );
};
