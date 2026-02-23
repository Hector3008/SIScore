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
  const io = new Server(server);// servidor socket.io real
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

server.listen(8000, () => {   console.log("server up on http://localhost:8000")}) //se levanta el servidor


/*
<script>
  const socket = io();

  socket.on("connect", () => {
    console.log("✅ Conectado al socket server con id:", socket.id);
  });


  socket.on("alerta", () => {
    console.log("📢 Alerta recibida: nuevo usuario conectado");
  });

  socket.on("updatedProducts", (data) => {
    console.log("📦 Productos actualizados:", data);
  });
</script>
*/