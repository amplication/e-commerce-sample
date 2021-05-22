import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImageService } from "./image.service";
import { ImageControllerBase } from "./base/image.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("images")
@common.Controller("images")
export class ImageController extends ImageControllerBase {
  constructor(
    protected readonly service: ImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
