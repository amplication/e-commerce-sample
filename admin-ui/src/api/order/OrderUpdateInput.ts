import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  totalPrice?: string | null;
  user?: UserWhereUniqueInput | null;
};
