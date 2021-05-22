import { Module } from "@nestjs/common";
import { LineItemModuleBase } from "./base/lineItem.module.base";
import { LineItemService } from "./lineItem.service";
import { LineItemController } from "./lineItem.controller";
import { LineItemResolver } from "./lineItem.resolver";

@Module({
  imports: [LineItemModuleBase],
  controllers: [LineItemController],
  providers: [LineItemService, LineItemResolver],
  exports: [LineItemService],
})
export class LineItemModule {}
