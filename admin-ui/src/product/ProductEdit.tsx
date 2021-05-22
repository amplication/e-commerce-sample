import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <TextInput label="Vendor" source="vendor" />
      </SimpleForm>
    </Edit>
  );
};
