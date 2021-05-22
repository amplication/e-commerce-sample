import { ImageWhereInput } from "./ImageWhereInput";
import { ImageOrderByInput } from "./ImageOrderByInput";

export type ImageFindManyArgs = {
  where?: ImageWhereInput;
  orderBy?: ImageOrderByInput;
  skip?: number;
  take?: number;
};
