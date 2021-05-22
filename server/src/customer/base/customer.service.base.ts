import { PrismaService } from "nestjs-prisma";
import { Prisma, Customer, Address, Order } from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async findMany<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }
  async findOne<T extends Prisma.CustomerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindUniqueArgs>
  ): Promise<Customer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async create<T extends Prisma.CustomerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.create<T>(args);
  }
  async update<T extends Prisma.CustomerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.update<T>(args);
  }
  async delete<T extends Prisma.CustomerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerDeleteArgs>
  ): Promise<Customer> {
    return this.prisma.customer.delete(args);
  }

  async findAddresses(
    parentId: string,
    args: Prisma.AddressFindManyArgs
  ): Promise<Address[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .addresses(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .orders(args);
  }
}
