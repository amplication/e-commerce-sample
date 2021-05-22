import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "title";

export const ProductTitle = (record: TProduct) => {
  return record.title;
};
