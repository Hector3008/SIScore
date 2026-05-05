import { Router } from "express";
import {
  proformsSystemViewController,
  produccionViewController,
  revisionViewController,
  bandejaViewController,
} from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();
proformsSystemViewRouter.get("/", (req, res)=>res.render("login.handlebars"));
proformsSystemViewRouter.get("/creacion", proformsSystemViewController);
proformsSystemViewRouter.get("/produccion", produccionViewController);
proformsSystemViewRouter.get("/revision", revisionViewController);

proformsSystemViewRouter.get("/bandeja", bandejaViewController);

export default proformsSystemViewRouter;
