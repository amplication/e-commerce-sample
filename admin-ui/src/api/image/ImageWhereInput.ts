import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ImageWhereInput = {
  height?: StringNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  src?: StringNullableFilter;
  width?: StringNullableFilter;
};
