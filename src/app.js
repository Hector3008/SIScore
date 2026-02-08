import express from "express";
import productRouter from "./routers/productsRouter.js";

const app = express();

  app.listen('8000', () =>{})//inicia el servidor en el puerto 8000
  app.use(express.json())//le aviso al servidor que va a trabajar con json
  app.use("/", express.static("./src/public"))//que va a trabajar con informacion publica
  app.use(express.urlencoded({ extended: true }));//y que va a trabajar con formulario


  app.get("/", (req, res) => {})//sintaxis para trabajar la route directamente

  app.use("/products", productRouter)//sintaxis para conectar routers




//import { Server } from "socket.io";
  //const io = new Server(httpServer);
  //Sockets(io);
