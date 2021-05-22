import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isDefault?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: StringNullableFilter;
};
