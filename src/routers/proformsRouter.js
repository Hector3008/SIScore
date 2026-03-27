import { Router } from "express";

import {
  proformsController,
  proformController,
  proformDeleteController,
  proformCreateController
} from "../controllers/proformsController.js";

const proformsRouter = Router();

proformsRouter.get("/", proformsController);

proformsRouter.get("/:pid", proformController);

proformsRouter.delete("/:pid", proformDeleteController)

proformsRouter.post("/", proformCreateController);

export default proformsRouter;