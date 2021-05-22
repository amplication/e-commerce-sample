import { SortOrder } from "../../util/SortOrder";

export type LineItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
