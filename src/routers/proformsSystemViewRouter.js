import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
  bandejaViewController,
} from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();

proformsSystemViewRouter.get("/", proformsSystemViewController);
proformsSystemViewRouter.get("/produccion", produccionViewController);
proformsSystemViewRouter.get("/revision", revisionViewController);

proformsSystemViewRouter.get("/bandeja", bandejaViewController);

export default proformsSystemViewRouter;
