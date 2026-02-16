//conexión con el DOM
socket = io();

const actualizarProductsBtn = document.querySelector(".actualizarProductsBtn");

actualizarProductsBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const productsConsulta = async () => {
    try {
      const result = await fetch("/api/products");
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const products = await productsConsulta()

  socket.emit("productList", products.payload);
});

socket.on("updatedProducts", (data) => {
  console.log("socket.on('updatedProducts') received");
  console.log("data from socket: ", data);

  data = data.filter(i=> i.status != "deleted")
    const tbdodyProducts = document.getElementById("tbdodyProducts");
    tbdodyProducts.innerHTML = `  `;
    
    for (product of data) {
      
      let tr = document.createElement("tr");
      tr.innerHTML = `
            
      <td>${product.ID}</td>
      <td>${product.status}</td>
      <td>${product.nombre}</td>
      <td>${product.description}</td>
      <td>${product.categoria}</td>
      <td>${product.tipo}</td>      
      <td>${product.cantidad}</td>
      <td>${product.equivalente}</td>
    `;
      tbdodyProducts.appendChild(tr);
    }
});




//consulta api/fetch:
(async () => {
  try {
    const result = await fetch("/api/products");
    const data = await result.json();

    //console.log("data:", data);
  } catch (error) {
    //console.error("Fetch error:", error);
  }
})();
