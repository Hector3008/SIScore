import { Router } from "express";

import { productsViewController
 } from "../controllers/productsController.js";

const productRouterView = Router();

productRouterView.get("/", productsViewController);

export default productRouterView;