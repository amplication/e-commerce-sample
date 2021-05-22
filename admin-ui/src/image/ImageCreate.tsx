import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Height" source="height" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="Src" source="src" />
        <TextInput label="Width" source="width" />
      </SimpleForm>
    </Create>
  );
};
