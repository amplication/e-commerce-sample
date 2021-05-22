import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type LineItem = {
  createdAt: Date;
  id: string;
  order?: OrderWhereUniqueInput | null;
  price: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity: number | null;
  updatedAt: Date;
};
