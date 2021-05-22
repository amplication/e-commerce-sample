import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateLineItemArgs } from "./CreateLineItemArgs";
import { UpdateLineItemArgs } from "./UpdateLineItemArgs";
import { DeleteLineItemArgs } from "./DeleteLineItemArgs";
import { LineItemFindManyArgs } from "./LineItemFindManyArgs";
import { LineItemFindUniqueArgs } from "./LineItemFindUniqueArgs";
import { LineItem } from "./LineItem";
import { Order } from "../../order/base/Order";
import { Product } from "../../product/base/Product";
import { LineItemService } from "../lineItem.service";

@graphql.Resolver(() => LineItem)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class LineItemResolverBase {
  constructor(
    protected readonly service: LineItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "read",
    possession: "any",
  })
  async _lineItemsMeta(
    @graphql.Args() args: LineItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [LineItem])
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "read",
    possession: "any",
  })
  async lineItems(
    @graphql.Args() args: LineItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<LineItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "LineItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => LineItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "read",
    possession: "own",
  })
  async lineItem(
    @graphql.Args() args: LineItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<LineItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "LineItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => LineItem)
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "create",
    possession: "any",
  })
  async createLineItem(
    @graphql.Args() args: CreateLineItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<LineItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "LineItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"LineItem"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => LineItem)
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "update",
    possession: "any",
  })
  async updateLineItem(
    @graphql.Args() args: UpdateLineItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<LineItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "LineItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"LineItem"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LineItem)
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "delete",
    possession: "any",
  })
  async deleteLineItem(
    @graphql.Args() args: DeleteLineItemArgs
  ): Promise<LineItem | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "read",
    possession: "any",
  })
  async order(
    @graphql.Parent() parent: LineItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Order | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Order",
    });
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LineItem",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: LineItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
