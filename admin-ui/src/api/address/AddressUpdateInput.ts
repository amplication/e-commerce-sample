import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  country?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  firstName?: string | null;
  isDefault?: boolean | null;
  lastName?: string | null;
  phone?: string | null;
  state?: string | null;
  zip?: string | null;
};
