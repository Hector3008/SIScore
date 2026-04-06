import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import productRouterView from "./routers/productsRouterView.js";
import productRouter from "./routers/productsRouter.js";
import proformsViewRouter  from "./routers/proformsViewRouter.js";
import socket from "./sockets.js";
import http from "http";
import proformsRouter from "./routers/proformsRouter.js";
import proformsSystemViewRouter from "./routers/proformsSystemViewRouter.js";

//se crea el app de express:
const app = express();

  const server = http.createServer(app)// se crea el servidor HTTP real
  const io = new Server(server, {
    cors: {
      origin: "*", // o tu dominio de Render
      methods: ["GET", "POST"],
    },
  });// servidor socket.io real
  socket(io);//se le cargan los sockets
  console.log("io created:", !!io);

//middlewares:
  app.use(express.json())//se le avisa al servidor que va a trabajar con json
  app.use("/", express.static("./src/public"))//que va a trabajar con informacion publica
  app.use(express.urlencoded({ extended: true }));//y que va a trabajar con formulario

  //ingenieria handlebars, motor de frontend
const hbs = handlebars.create({
  helpers: {
    eq: function (arg1, arg2, options) {
      if (
        options &&
        typeof options.fn === "function" &&
        typeof options.inverse === "function"
      ) {
        if (arg1 === arg2) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      } else {
        return "";
      }
    },

    // 👇 helper CRÍTICO para pasar objetos a JS
    json: function (context) {
      return JSON.stringify(context);
    },
  },
});
      app.engine("handlebars", hbs.engine);

      app.set("views", "./src/views");
      app.set("view engine", "handlebars");

//routers:
  app.get("/", (req, res) => {})//sintaxis para trabajar la route directamente
  app.use("/products", productRouterView);//sintaxis para conectar routers
  app.use("/api/products", productRouter);
  app.use("/api/proforms",proformsRouter);
  
  app.use("/proforms", proformsViewRouter);
  app.use("/proformsSystem", proformsSystemViewRouter);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
