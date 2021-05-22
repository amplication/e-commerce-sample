import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  src?: SortOrder;
  updatedAt?: SortOrder;
  width?: SortOrder;
};
