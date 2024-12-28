import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PerformanceMetricEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateRecorded" source="dateRecorded" />
        <TextInput label="metricName" source="metricName" />
        <TextInput label="relatedFund" source="relatedFund" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
