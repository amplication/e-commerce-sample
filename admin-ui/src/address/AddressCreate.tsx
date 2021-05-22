import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="Is Default" source="isDefault" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="State" source="state" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Create>
  );
};
