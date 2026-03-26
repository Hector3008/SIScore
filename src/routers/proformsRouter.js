import { Router } from "express";

import {
  proformsController,
  proformController,
} from "../controllers/proformsController.js";

const proformsRouter = Router();

proformsRouter.get("/", proformsController);

proformsRouter.get("/:pid", proformController);
export default proformsRouter;
