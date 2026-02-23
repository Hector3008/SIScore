import { Router } from "express";
import { proformsSystemViewController } from "../controllers/proformsSystemViewController.js";

const proformsSystemViewRouter = Router();

proformsSystemViewRouter.get("/", proformsSystemViewController);

export default proformsSystemViewRouter;
