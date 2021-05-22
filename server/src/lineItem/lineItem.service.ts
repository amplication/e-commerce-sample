import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LineItemServiceBase } from "./base/lineItem.service.base";

@Injectable()
export class LineItemService extends LineItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
