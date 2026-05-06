import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
  bandejaViewController,
  loginController,
} from "../controllers/proformsSystemViewController.js";
//commit
const proformsSystemViewRouter = Router();
proformsSystemViewRouter.get("/", loginController);
proformsSystemViewRouter.get("/creacion", proformsSystemViewController);
proformsSystemViewRouter.get("/produccion", produccionViewController);
proformsSystemViewRouter.get("/revision", revisionViewController);

proformsSystemViewRouter.get("/bandeja", bandejaViewController);

export default proformsSystemViewRouter;
