import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageUpdateInput = {
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
  src?: string | null;
  width?: string | null;
};
