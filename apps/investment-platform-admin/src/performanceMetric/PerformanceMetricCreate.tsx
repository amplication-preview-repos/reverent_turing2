import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PerformanceMetricCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateRecorded" source="dateRecorded" />
        <TextInput label="metricName" source="metricName" />
        <TextInput label="relatedFund" source="relatedFund" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
