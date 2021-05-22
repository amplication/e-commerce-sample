import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <TextInput label="Vendor" source="vendor" />
      </SimpleForm>
    </Create>
  );
};
