import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
  bandejaViewController,
  profileController,
} from "../controllers/proformsSystemViewController.js";
import {
  verifyToken,
  checkRole,
  checkPermission,
} from "../middlewares/auth.js";
//commit
const proformsSystemViewRouter = Router();

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

proformsSystemViewRouter.get(
  "/profile",
  verifyToken,
  profileController,
);

export default proformsSystemViewRouter;
