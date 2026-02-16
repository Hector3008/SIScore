socket = io();

socket.on("connect", () => {
  console.log("✅ Conectado al socket server con id:", socket.id);

  // Cliente → Servidor / el cliente envía y el servidor recibe:
  socket.emit("testing message", {
    user: socket.id,
    msg: "Hola servidor, estoy vivo",
    time: new Date().toLocaleTimeString(),
  });

  socket.on("testing response", (data) => {
    console.log("🔁 Respuesta del servidor:", data);
  });

  socket.emit("otro mensaje de prueba", {
    msg: "esto es otro mensaje de prueba",
  });
  socket.on("un mensaje de prueba más", (data) => {
    console.log(data.msg);
  });

})
