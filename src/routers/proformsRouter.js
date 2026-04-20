import { Router } from "express";

import {
  proformsController,
  proformController,
  proformDeleteController,
  proformCreateController,
  proformUpdateController
} from "../controllers/proformsController.js";

const proformsRouter = Router();

proformsRouter.get("/", proformsController);

proformsRouter.get("/:code", proformController);

proformsRouter.delete("/:pid", proformDeleteController)

proformsRouter.post("/", proformCreateController);

proformsRouter.put("/:pcode", proformUpdateController);

export default proformsRouter;