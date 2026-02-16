import { Router } from "express";

import { proformsViewController } from "../controllers/proformsViewController.js";

const proformsViewRouter = Router();

proformsViewRouter.get("/", proformsViewController);

export default proformsViewRouter;
