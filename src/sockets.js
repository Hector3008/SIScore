export default (io) => {
  //console.log("new connection / mensaje desde el servidor");

  io.on("connection", async (socket) => {
    //console.log("new connection / mensaje desde el cliente. Con el script cargado al .handlebars")
    socket.on("productList", (data) => {
      io.emit("updatedProducts", data);
    });
    /*prueba de socket:
    //socket.on = el servidor recibe:
    socket.on("testing message", (data) => {
      console.log("📩 Servidor recibió:", data);

      //socket.emit = el servidor envía:
      socket.emit("testing response", {
        msg: "Mensaje recibido por el servidor",
        originalData: data,
        serverTime: new Date().toLocaleTimeString(),
      });

      socket.on("otro mensaje de prueba", (data) => {
        console.log("data form otro mensaje de prueba ", data.msg);
      });

      socket.emit("un mensaje de prueba más", {
        msg: "un mensaje de prueba más",
      });
    });
    */
    /*
    socket.on("productList", (data) => {
      //console.log(`New client connected`);
      io.emit("updatedProducts", data);
    });
    socket.broadcast.emit("alerta");

    */
  });
};
/*explicacion de métodos y objetos: 
io = el servidor
socket = conexión individual
.emit = enviar mensaje
.on = recibir mensaje

explicacion: 
io.on("connection", async (socket) => {

socket.on("productList", (data) => {
io.emit("updatedProducts", data);
});
el servidor recibe el evento "conexion" 
el cliente recibe la lista de productos
y el servidor envía la lista actualizada


el método .emit consta de una clave y un objeto

el método .on recibe esa clave y procesa ese objeto

ejemplo: 

socket.emit("testing message", {msg: "este es el mensaje"})

socket.on("testing message",
console.log(msg))
*/
