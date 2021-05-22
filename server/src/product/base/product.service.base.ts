import { PrismaService } from "nestjs-prisma";
import { Prisma, Product, Image, LineItem } from "@prisma/client";

export class ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ): Promise<number> {
    return this.prisma.product.count(args);
  }

  async findMany<T extends Prisma.ProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ): Promise<Product[]> {
    return this.prisma.product.findMany(args);
  }
  async findOne<T extends Prisma.ProductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindUniqueArgs>
  ): Promise<Product | null> {
    return this.prisma.product.findUnique(args);
  }
  async create<T extends Prisma.ProductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCreateArgs>
  ): Promise<Product> {
    return this.prisma.product.create<T>(args);
  }
  async update<T extends Prisma.ProductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductUpdateArgs>
  ): Promise<Product> {
    return this.prisma.product.update<T>(args);
  }
  async delete<T extends Prisma.ProductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductDeleteArgs>
  ): Promise<Product> {
    return this.prisma.product.delete(args);
  }

  async findImages(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .images(args);
  }

  async findLineItems(
    parentId: string,
    args: Prisma.LineItemFindManyArgs
  ): Promise<LineItem[]> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .lineItems(args);
  }
}
