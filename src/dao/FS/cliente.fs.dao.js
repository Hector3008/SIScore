import fs from "fs";

class ClienteFSDAO {
  #path;
  constructor() {
    this.#path = "data/clientes.json";
    this.#init();
  }
  async #init() {
    if (!fs.existsSync(this.#path)) {
      await fs.promises.writeFile(this.#path, JSON.stringify([], null));
    }
  }

  async getAll() {
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let clients = JSON.parse(data);

    clients = {
      status: "200",
      payload: clients,
    };

    return clients;
  }
}

  
export default ClienteFSDAO;