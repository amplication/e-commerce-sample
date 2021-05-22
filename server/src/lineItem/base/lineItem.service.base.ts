import { PrismaService } from "nestjs-prisma";
import { Prisma, LineItem, Order, Product } from "@prisma/client";

export class LineItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LineItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.lineItem.count(args);
  }

  async findMany<T extends Prisma.LineItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemFindManyArgs>
  ): Promise<LineItem[]> {
    return this.prisma.lineItem.findMany(args);
  }
  async findOne<T extends Prisma.LineItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemFindUniqueArgs>
  ): Promise<LineItem | null> {
    return this.prisma.lineItem.findUnique(args);
  }
  async create<T extends Prisma.LineItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemCreateArgs>
  ): Promise<LineItem> {
    return this.prisma.lineItem.create<T>(args);
  }
  async update<T extends Prisma.LineItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemUpdateArgs>
  ): Promise<LineItem> {
    return this.prisma.lineItem.update<T>(args);
  }
  async delete<T extends Prisma.LineItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LineItemDeleteArgs>
  ): Promise<LineItem> {
    return this.prisma.lineItem.delete(args);
  }

  async getOrder(parentId: string): Promise<Order | null> {
    return this.prisma.lineItem
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }

  async getProduct(parentId: string): Promise<Product | null> {
    return this.prisma.lineItem
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
