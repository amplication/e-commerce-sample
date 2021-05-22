import { ArgsType, Field } from "@nestjs/graphql";
import { ImageCreateInput } from "./ImageCreateInput";

@ArgsType()
class CreateImageArgs {
  @Field(() => ImageCreateInput, { nullable: false })
  data!: ImageCreateInput;
}

export { CreateImageArgs };
