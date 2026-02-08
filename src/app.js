import express from "express";

import handlebars from "express-handlebars";
import productRouterView from "./routers/productsRouterView.js";
import productRouter from "./routers/productsRouter.js";
const app = express();

  app.listen('8000', () =>{})//inicia el servidor en el puerto 8000
  app.use(express.json())//le aviso al servidor que va a trabajar con json
  app.use("/", express.static("./src/public"))//que va a trabajar con informacion publica
  app.use(express.urlencoded({ extended: true }));//y que va a trabajar con formulario

//ingenieria handlebars
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


  app.get("/", (req, res) => {})//sintaxis para trabajar la route directamente

  app.use("/products", productRouterView);//sintaxis para conectar routers
  app.use("/api/products", productRouter);



//import { Server } from "socket.io";
  //const io = new Server(httpServer);
  //Sockets(io);
