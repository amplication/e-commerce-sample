import { ArgsType, Field } from "@nestjs/graphql";
import { LineItemWhereUniqueInput } from "./LineItemWhereUniqueInput";
import { LineItemUpdateInput } from "./LineItemUpdateInput";

@ArgsType()
class UpdateLineItemArgs {
  @Field(() => LineItemWhereUniqueInput, { nullable: false })
  where!: LineItemWhereUniqueInput;
  @Field(() => LineItemUpdateInput, { nullable: false })
  data!: LineItemUpdateInput;
}

export { UpdateLineItemArgs };
