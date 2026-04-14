import { Router } from "express";
import {
  proformsSystemViewController,
  proformsSystemViewControllerClaude,
} from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();

proformsSystemViewRouter.get("/", proformsSystemViewController);
proformsSystemViewRouter.get("/claude", proformsSystemViewControllerClaude);

export default proformsSystemViewRouter;
