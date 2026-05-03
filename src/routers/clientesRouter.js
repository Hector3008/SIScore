import { Router } from "express";

import { clienteController } from "../controllers/clientesController.js";
const clienteRouter = Router();
clienteRouter.get("/", clienteController);


export default clienteRouter;

