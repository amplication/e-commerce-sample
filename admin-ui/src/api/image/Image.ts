import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type Image = {
  createdAt: Date;
  height: string | null;
  id: string;
  product?: ProductWhereUniqueInput | null;
  src: string | null;
  updatedAt: Date;
  width: string | null;
};
