import { ArgsType, Field } from "@nestjs/graphql";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageUpdateInput } from "./ImageUpdateInput";

@ArgsType()
class UpdateImageArgs {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  where!: ImageWhereUniqueInput;
  @Field(() => ImageUpdateInput, { nullable: false })
  data!: ImageUpdateInput;
}

export { UpdateImageArgs };
