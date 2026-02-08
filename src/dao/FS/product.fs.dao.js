import fs from "fs";

class ProductFSDAO {
  #path;
  constructor() {
    this.#path = "data/products.json";
    this.#init();
  }
  async #init() {
    if (!fs.existsSync(this.#path)) {
      await fs.promises.writeFile(this.#path, JSON.stringify([], null));
    }
  }
  async getAll() {
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let products = JSON.parse(data);

    products = {
      status: "200",
      payload: products,
    };//formateo el array del json en un objeto más adecuado
    
    return products;
  }
}

export default ProductFSDAO;