import { ArgsType, Field } from "@nestjs/graphql";
import { LineItemCreateInput } from "./LineItemCreateInput";

@ArgsType()
class CreateLineItemArgs {
  @Field(() => LineItemCreateInput, { nullable: false })
  data!: LineItemCreateInput;
}

export { CreateLineItemArgs };
