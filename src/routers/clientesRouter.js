import { Router } from "express";

import { clienteController, clienteControllerForMongo } from "../controllers/clientesController.js";
const clienteRouter = Router();
clienteRouter.get("/", clienteController);

clienteRouter.get("/mongo", clienteControllerForMongo)
export default clienteRouter;

