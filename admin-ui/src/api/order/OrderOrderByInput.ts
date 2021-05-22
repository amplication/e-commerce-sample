import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  addressId?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
