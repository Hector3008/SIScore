socket = io();

console.log("realTimeProducts.js active");

socket.on("testing message", (data) => {
  console.log("socket.on data here");
  console.log("data from socket.on on realTimeProducts.js here: ", data);
});
