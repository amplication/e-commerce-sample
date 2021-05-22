import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LineItemWhereInput } from "./LineItemWhereInput";
import { Type } from "class-transformer";
import { LineItemOrderByInput } from "./LineItemOrderByInput";

@ArgsType()
class LineItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LineItemWhereInput,
  })
  @Field(() => LineItemWhereInput, { nullable: true })
  @Type(() => LineItemWhereInput)
  where?: LineItemWhereInput;

  @ApiProperty({
    required: false,
    type: LineItemOrderByInput,
  })
  @Field(() => LineItemOrderByInput, { nullable: true })
  @Type(() => LineItemOrderByInput)
  orderBy?: LineItemOrderByInput;

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

export { LineItemFindManyArgs };
