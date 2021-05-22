import { ArgsType, Field } from "@nestjs/graphql";
import { LineItemWhereUniqueInput } from "./LineItemWhereUniqueInput";

@ArgsType()
class DeleteLineItemArgs {
  @Field(() => LineItemWhereUniqueInput, { nullable: false })
  where!: LineItemWhereUniqueInput;
}

export { DeleteLineItemArgs };
