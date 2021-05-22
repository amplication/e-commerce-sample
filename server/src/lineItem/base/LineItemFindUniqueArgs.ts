import { ArgsType, Field } from "@nestjs/graphql";
import { LineItemWhereUniqueInput } from "./LineItemWhereUniqueInput";

@ArgsType()
class LineItemFindUniqueArgs {
  @Field(() => LineItemWhereUniqueInput, { nullable: false })
  where!: LineItemWhereUniqueInput;
}

export { LineItemFindUniqueArgs };
