import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateProductArgs } from "./CreateProductArgs";
import { UpdateProductArgs } from "./UpdateProductArgs";
import { DeleteProductArgs } from "./DeleteProductArgs";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductFindUniqueArgs } from "./ProductFindUniqueArgs";
import { Product } from "./Product";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { LineItemFindManyArgs } from "../../lineItem/base/LineItemFindManyArgs";
import { LineItem } from "../../lineItem/base/LineItem";
import { ProductService } from "../product.service";

@graphql.Resolver(() => Product)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class ProductResolverBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async _productsMeta(
    @graphql.Args() args: ProductFindManyArgs
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

  @graphql.Query(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Args() args: ProductFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  async product(
    @graphql.Args() args: ProductFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Product",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  async createProduct(
    @graphql.Args() args: CreateProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Product",
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
        `providing the properties: ${properties} on ${"Product"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async updateProduct(
    @graphql.Args() args: UpdateProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Product",
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
        `providing the properties: ${properties} on ${"Product"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  async deleteProduct(
    @graphql.Args() args: DeleteProductArgs
  ): Promise<Product | null> {
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

  @graphql.ResolveField(() => [Image])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async images(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ImageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Image[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Image",
    });
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [LineItem])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async lineItems(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: LineItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<LineItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "LineItem",
    });
    const results = await this.service.findLineItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
