import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  customer?: CustomerWhereUniqueInput | null;
  firstName: string | null;
  id: string;
  isDefault: boolean | null;
  lastName: string | null;
  phone: string | null;
  state: string | null;
  updatedAt: Date;
  zip: string | null;
};
