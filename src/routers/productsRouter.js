import { Router } from "express";

import { productsController, deleteProductController, productController
 } from "../controllers/productsController.js";

const productRouter = Router();

productRouter.get("/", productsController);
productRouter.get("/:pid", productController);

productRouter.get("/delete/:pid", deleteProductController);
export default productRouter;