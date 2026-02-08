import fs from "fs";

class ProductFSDAO {
  #path;
  constructor() {
    this.#path = "data/products.json";
    this.#init();
    }
    async #init() {      if (!fs.existsSync(this.#path)) {        await fs.promises.writeFile(this.#path, JSON.stringify([], null));}
  }


  async getAll() {
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let products = JSON.parse(data);

    products = {
      status: "200",
      payload: products,
    }; //formateo el array del json en un objeto más adecuado

    return products;
  }
  async getByID(id) {

    let data = await fs.promises.readFile("data/products.json", "utf-8");
    let products = JSON.parse(data);
    
    const found = products.find((i) => i.ID == id);
    if (!found) return "ERROR: producto no encontrado"
    return found;
  }
  async deleteByID(id) {
    if (!fs.existsSync(this.#path)) return "[ERR] DB file does not exist";

    let isFound = false;
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let products = JSON.parse(data);

    let newProducts = products.map((i) => {
      if (i.ID == id) {
        isFound = true;
        return {
          ...i,
          status: "deleted",
        };

        
      } else return i;
    });
    if (!isFound) return "[ERR] Product does not exist";
    //actualizo la bdd:
    await fs.promises.writeFile(
      this.#path,
      JSON.stringify(newProducts, null, 2),
    );
    return newProducts.find((i) => i.ID === id);
  }
}

export default ProductFSDAO;