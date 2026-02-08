import { Router } from "express";

import { productsController
 } from "../controllers/productsController.js";

const productRouter = Router();

productRouter.get("/",
  productsController)

export default productRouter;