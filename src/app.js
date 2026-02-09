import express from "express";
import { Server } from "socket.io";
import handlebars from "express-handlebars";
import productRouterView from "./routers/productsRouterView.js";
import productRouter from "./routers/productsRouter.js";
import socket from "./sockets.js";
import http from "http";

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
            // Verificar si options está definido y es una función
            if (
              options &&
              typeof options.fn === "function" &&
              typeof options.inverse === "function"
            ) {
              if (arg1 === arg2) {
                return options.fn(this); // Ejecuta el bloque de código de {{#eq}}
              } else {
                return options.inverse(this); // Ejecuta el bloque de código de {{else}}
              }
            } else {
              return ""; // Devuelve una cadena vacía si las opciones no son válidas
            }
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


server.listen(8000, () => {   console.log("server up on http://localhost:8000")}) //se levanta el servidor