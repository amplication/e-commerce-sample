import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageCreateInput = {
  height?: string | null;
  product?: ProductWhereUniqueInput | null;
  src?: string | null;
  width?: string | null;
};
