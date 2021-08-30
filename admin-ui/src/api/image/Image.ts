import { Product } from "../product/Product";

export type Image = {
  createdAt: Date;
  height: string | null;
  id: string;
  product?: Product | null;
  src: string | null;
  updatedAt: Date;
  width: string | null;
};
