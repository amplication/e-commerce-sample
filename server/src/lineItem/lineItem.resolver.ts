import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LineItemResolverBase } from "./base/lineItem.resolver.base";
import { LineItem } from "./base/LineItem";
import { LineItemService } from "./lineItem.service";

@graphql.Resolver(() => LineItem)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class LineItemResolver extends LineItemResolverBase {
  constructor(
    protected readonly service: LineItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
