import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Order,
  LineItem,
  Address,
  Customer,
  User,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<number> {
    return this.prisma.order.count(args);
  }

  async findMany<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
  async findOne<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<Order | null> {
    return this.prisma.order.findUnique(args);
  }
  async create<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    return this.prisma.order.create<T>(args);
  }
  async update<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<Order> {
    return this.prisma.order.update<T>(args);
  }
  async delete<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async findLineItems(
    parentId: string,
    args: Prisma.LineItemFindManyArgs
  ): Promise<LineItem[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .lineItems(args);
  }

  async getAddress(parentId: string): Promise<Address | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
