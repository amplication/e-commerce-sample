import { LineItemWhereInput } from "./LineItemWhereInput";
import { LineItemOrderByInput } from "./LineItemOrderByInput";

export type LineItemFindManyArgs = {
  where?: LineItemWhereInput;
  orderBy?: LineItemOrderByInput;
  skip?: number;
  take?: number;
};
