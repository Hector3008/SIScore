import { Router } from "express";

import { proformsController } from "../controllers/proformsController.js";

const proformsRouter = Router();

proformsRouter.get("/", proformsController);

export default proformsRouter;
