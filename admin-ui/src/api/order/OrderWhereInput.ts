import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  address?: AddressWhereUniqueInput;
  comments?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  totalPrice?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
