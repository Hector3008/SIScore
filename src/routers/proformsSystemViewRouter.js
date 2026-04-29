import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
} from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();

proformsSystemViewRouter.get("/", proformsSystemViewController);
proformsSystemViewRouter.get("/produccion", produccionViewController);

export default proformsSystemViewRouter;
