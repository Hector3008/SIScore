const postProformBtn = document.querySelector("#postProformBtn");
/*
  el boton postProform ejecuta el metodo post para crear una nueva proforma. Recibiendo informacion del frontend y conectandola al backend

  captura informacion del formulario cliente ✅
  la lista del medios de pago ✅
  y la lista de productos
  
  con eso crea una proforma
  y se despide con una notificacion
*/
postProformBtn.addEventListener("click", (e) => {
  //captura de datos, formulario cliente
  
  e.preventDefault();

  const empresa = document.querySelector("#empresa-nombre").value
  const empresa_telefono = document.querySelector("#empresa-telf").innerHTML;
  const empresa_ruc = document.querySelector("#empresa-ruc").innerHTML;
  const empresa_email = document.querySelector("#empresa-email").innerHTML;

  const proform = document.querySelector("#proform-number").innerHTML;

  
  const nombre = document.querySelector("#form-client-name-field").value;
  const canal = document.querySelector("#form-cliente-canal-de-venta-field").value;
  const vendedor = document.querySelector("#form-client-vendedor-field").value;
  const pago = document.querySelector("#form-client-pago-field").value;
  const ruc = document.querySelector("#form-client-ruc-field").value;
  const telefono = document.querySelector("#form-client-telefono-field").value;
  const email = document.querySelector("#form-client-email-field").value;
  const direccion = document.querySelector("#form-client-direccion-field").value;
  const provincia = document.querySelector("#form-client-provincia-field").value;
  const ciudad = document.querySelector("#form-client-ciudad-field").value;
  const entrega = document.querySelector("#form-client-entrega-field").value;
  const destino = document.querySelector("#form-client-destino-field").value;
  const agencia = document.querySelector("#form-client-agencia-field").value;
  const atencion = document.querySelector("#form-client-atencion-field").value;
  const fecha = document.querySelector("#form-client-fecha-field").value;
  const comprobante = document.querySelector("#form-client-comprobante-field").value;
  const pagos = document.querySelectorAll(".pagoTr"); //devuelve un objeto nodeList

  const pagosArray = Array.from(pagos) //lo convertimos en array y lo formateamos
    .map((tr, index) => {
      const tds = tr.querySelectorAll("td");
      return {
        index: index + 1,
        medio: tds[1].textContent.trim(),
        monto: tds[2].textContent.replace(" /S", "").trim(),
        operacion: tds[3].textContent.trim(),
      };
    });

    let productsHistorial = []
    let products = []
          //const productTable = document.querySelector("#productList");
const productList = document.querySelectorAll(".productListItem");
          productsHistorial = Array.from(productList).map((tr) => {
            const tds = tr.querySelectorAll("td");
            // console.log("tds: ", tds)
            return {
              index: tds[0].textContent,
              status: tds[1].textContent.trim(),
              nombre: tds[2].textContent.trim(),
              cantidad: tds[3].textContent.trim(),
              comentario: tds[4].textContent.trim(),
              importe: tds[5].textContent.trim(),
              total: tds[3].textContent.trim() * tds[5].textContent.trim(),
            };
          });
          
products = productsHistorial.filter(e=>e.status=="true")
//console.log("productsHistorial: ", productsHistorial);
//console.log("products: ", products);
  const body = {
    "numero de proforma": proform,
    membrete: {
      empresa, email: empresa_email, ruc: empresa_ruc, telefono: empresa_telefono
    },
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
    pago,
    comprobante,
    pagos: pagosArray,
    products,
    productsHistorial
  };

  fetch("/api/proforms/", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("res.status here: ", res.status);
    return res.text();
  })

  const reset_values= ()=>{

        document.querySelector("#tbody-products-proform-preview").innerHTML = "";
           document.querySelector("#productList").innerHTML="";
           document.querySelector("#preview-pagos").innerHTML="";
document.querySelector("#tbbodyPagos").innerHTML="";
    document.querySelector("#form-cliente-canal-de-venta-field").value = "";
    document.querySelector("#form-client-vendedor-field").value = "";
    document.querySelector("#form-client-pago-field").value = "";
    document.querySelector("#form-client-name-field").value = "";
    document.querySelector("#form-client-ruc-field").value = "";
    document.querySelector("#form-client-telefono-field").value = "";
    document.querySelector("#form-client-email-field").value = "";
    document.querySelector("#form-client-direccion-field").value = "";
    document.querySelector("#form-client-provincia-field").value = "";
    document.querySelector("#form-client-ciudad-field").value = "";
    document.querySelector("#form-client-entrega-field").value = "";
    document.querySelector("#form-client-destino-field").value = "";
    document.querySelector("#form-client-agencia-field").value = "";
    document.querySelector("#form-client-atencion-field").value = "";
    document.querySelector("#form-client-fecha-field").value = "";


  }
  reset_values()
        });
