import { Router } from "express";

import {  proformsViewController} from "../controllers/proformsViewController.js";
import { proformMongoController } from "../controllers/proformsController.js";

const proformsViewRouter = Router();

proformsViewRouter.get("/", proformsViewController);
proformsViewRouter.get("/mongo", proformMongoController);

export default proformsViewRouter;
