import { ArgsType, Field } from "@nestjs/graphql";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";

@ArgsType()
class ImageFindUniqueArgs {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  where!: ImageWhereUniqueInput;
}

export { ImageFindUniqueArgs };
