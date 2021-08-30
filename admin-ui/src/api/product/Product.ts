import { Image } from "../image/Image";
import { LineItem } from "../lineItem/LineItem";

export type Product = {
  createdAt: Date;
  id: string;
  images?: Array<Image>;
  lineItems?: Array<LineItem>;
  price: string | null;
  title: string | null;
  updatedAt: Date;
  vendor: string | null;
};
