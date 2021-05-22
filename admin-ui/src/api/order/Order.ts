import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type Order = {
  address?: AddressWhereUniqueInput | null;
  comments: string | null;
  createdAt: Date;
  customer?: CustomerWhereUniqueInput | null;
  id: string;
  totalPrice: string | null;
  updatedAt: Date;
  user?: UserWhereUniqueInput | null;
};
