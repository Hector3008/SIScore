const postProformBtn = document.querySelector("#postProformBtn");

postProformBtn.addEventListener("click", (e) => {
  //captura de datos, formulario cliente
    const canal = document.querySelector("#form-canal-de-venta-field").value;
    const vendedor = document.querySelector("#form-vendedor-field").value;
    const pago = document.querySelector("#form-forma-de-pago-field").value;
    const nombre = document.querySelector("#form-client-field").value;
    const ruc = document.querySelector("#form-ruc-field").value
    const telefono = document.querySelector("#form-telefono-field").value;  
    const email = document.querySelector("#form-email-field").value;  
    const direccion = document.querySelector("#form-direccion-field").value;
    const provincia = document.querySelector("#form-provincia-field").value;
    const ciudad = document.querySelector("#form-ciudad-field").value;
    const entrega = document.querySelector("#form-Entrega-field").value;
    const destino = document.querySelector("#form-destino-field").value;
    const agencia = document.querySelector("#form-agencia-field").value
    const atencion = document.querySelector("#form-atencion-field").value;
    const fecha = document.querySelector("#form-fecha-field").value;

  e.preventDefault();
  const body = {
    cliente: {
      nombre,
      ruc,
      telefono,
      email,
      direccion,
      provincia,
      ciudad,
    },
    entrega,
    destino,
    agencia,
    atencion,
    fecha,
    vendedor,
    canal,
    pago
  };

  fetch("/api/proforms/", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("res.status here: ", res.status);
      return res.text();
    })
});
