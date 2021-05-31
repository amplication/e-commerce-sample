import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  customer?: Customer | null;
  firstName: string | null;
  id: string;
  isDefault: boolean | null;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  state: string | null;
  updatedAt: Date;
  zip: string | null;
};
