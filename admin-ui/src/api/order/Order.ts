import { Address } from "../address/Address";
import { Customer } from "../customer/Customer";
import { LineItem } from "../lineItem/LineItem";
import { User } from "../user/User";

export type Order = {
  address?: Address | null;
  comments: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  lineItems?: Array<LineItem>;
  totalPrice: string | null;
  updatedAt: Date;
  user?: User | null;
};
