import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: StringNullableFilter;
  title?: StringNullableFilter;
  vendor?: StringNullableFilter;
};
