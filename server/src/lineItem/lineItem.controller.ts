import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LineItemService } from "./lineItem.service";
import { LineItemControllerBase } from "./base/lineItem.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("line-items")
@common.Controller("line-items")
export class LineItemController extends LineItemControllerBase {
  constructor(
    protected readonly service: LineItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
