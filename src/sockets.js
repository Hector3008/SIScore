export default (io) => {
    
  //console.log("new connection / mensaje desde el servidor");
        
  io.on("connection", async (socket) => {

  //console.log("new connection / mensaje desde el cliente. Con el script cargado al .handlebars")

    socket.on("productList", (data) => {
      console.log(`New client connected`);
      io.emit("updatedProducts", data);
    });

    socket.broadcast.emit("alerta");
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

*/