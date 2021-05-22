import { LineItem as TLineItem } from "../api/lineItem/LineItem";

export const LINEITEM_TITLE_FIELD = "id";

export const LineItemTitle = (record: TLineItem) => {
  return record.id;
};
