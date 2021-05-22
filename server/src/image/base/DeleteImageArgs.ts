import { ArgsType, Field } from "@nestjs/graphql";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";

@ArgsType()
class DeleteImageArgs {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  where!: ImageWhereUniqueInput;
}

export { DeleteImageArgs };
