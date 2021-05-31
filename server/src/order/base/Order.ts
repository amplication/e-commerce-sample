import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Address } from "../../address/base/Address";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { LineItem } from "../../lineItem/base/LineItem";
import { User } from "../../user/base/User";
@ObjectType()
class Order {
  @ApiProperty({
    required: false,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  address?: Address | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customer?: Customer | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [LineItem],
  })
  @ValidateNested()
  @Type(() => LineItem)
  @IsOptional()
  lineItems?: Array<LineItem>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalPrice!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}
export { Order };
