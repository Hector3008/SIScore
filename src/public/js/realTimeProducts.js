//conexión con el DOM

const btn = document.querySelector(".actualizarProductsBtn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("eventListener active");
});

//consulta api/fetch:
(async () => {
  try {
    const result = await fetch("/api/products");
    const data = await result.json();

    console.log("data:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
})();
