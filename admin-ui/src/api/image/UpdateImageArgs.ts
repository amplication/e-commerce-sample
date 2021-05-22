import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageUpdateInput } from "./ImageUpdateInput";

export type UpdateImageArgs = {
  where: ImageWhereUniqueInput;
  data: ImageUpdateInput;
};
