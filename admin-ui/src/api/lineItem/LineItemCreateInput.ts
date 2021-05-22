import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type LineItemCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
