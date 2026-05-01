import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
} from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();

proformsSystemViewRouter.get("/", proformsSystemViewController);
proformsSystemViewRouter.get("/produccion", produccionViewController);
proformsSystemViewRouter.get("/revision", revisionViewController);

export default proformsSystemViewRouter;
