import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
  bandejaViewController,
  loginController,
} from "../controllers/proformsSystemViewController.js";
import {
  verifyToken,
  checkRole,
  checkPermission,
} from "../middlewares/auth.js";
//commit
const proformsSystemViewRouter = Router();
proformsSystemViewRouter.get("/", loginController);
proformsSystemViewRouter.get(
  "/creacion",
  verifyToken,checkPermission("all","creacion"),
  
  proformsSystemViewController,
);
proformsSystemViewRouter.get(
  "/produccion",
  verifyToken,
  checkPermission("all", "produccion"),
  produccionViewController,
);
proformsSystemViewRouter.get(
  "/revision",
  verifyToken,
  checkPermission("all", "revision"),
  revisionViewController,
);
proformsSystemViewRouter.get(
  "/bandeja",
  verifyToken,
  checkPermission("all", "bandeja"),
  bandejaViewController,
);

export default proformsSystemViewRouter;
