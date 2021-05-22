import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereInput } from "./ImageWhereInput";
import { Type } from "class-transformer";
import { ImageOrderByInput } from "./ImageOrderByInput";

@ArgsType()
class ImageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @Field(() => ImageWhereInput, { nullable: true })
  @Type(() => ImageWhereInput)
  where?: ImageWhereInput;

  @ApiProperty({
    required: false,
    type: ImageOrderByInput,
  })
  @Field(() => ImageOrderByInput, { nullable: true })
  @Type(() => ImageOrderByInput)
  orderBy?: ImageOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ImageFindManyArgs };
