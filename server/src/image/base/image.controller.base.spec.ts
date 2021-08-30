import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ImageController } from "../image.controller";
import { ImageService } from "../image.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  height: "exampleHeight",
  id: "exampleId",
  src: "exampleSrc",
  updatedAt: new Date(),
  width: "exampleWidth",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  height: "exampleHeight",
  id: "exampleId",
  src: "exampleSrc",
  updatedAt: new Date(),
  width: "exampleWidth",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    height: "exampleHeight",
    id: "exampleId",
    src: "exampleSrc",
    updatedAt: new Date(),
    width: "exampleWidth",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  height: "exampleHeight",
  id: "exampleId",
  src: "exampleSrc",
  updatedAt: new Date(),
  width: "exampleWidth",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Image", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ImageService,
          useValue: service,
        },
      ],
      controllers: [ImageController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /images", async () => {
    await request(app.getHttpServer())
      .post("/images")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /images", async () => {
    await request(app.getHttpServer())
      .get("/images")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /images/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/images"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /images/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/images"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
