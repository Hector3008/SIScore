import fs from "fs";

class ProformsFSDAO {
  #path;
  constructor() {
    this.#path = "data/proforms.json";
    this.#init();
  }
  async #init() {
    if (!fs.existsSync(this.#path)) {
      await fs.promises.writeFile(this.#path, JSON.stringify([], null));
    }
  }

  async getAll() {
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let proforms = JSON.parse(data);

    proforms = {
      status: "200",
      payload: proforms,
    }; //formateo el array del json en un objeto más adecuado

    return proforms;
  }
  async getByID(id) {
    let data = await fs.promises.readFile("data/proforms.json", "utf-8");
    let proforms = JSON.parse(data);


    const found = proforms.find((i) => i.ID == id);
    if (!found) return "ERROR: proforma no encontrada";
    return found;
  }
  async deleteByID(id) {
    if (!fs.existsSync(this.#path)) return "[ERR] DB file does not exist";

    let isFound = false;
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let proforms = JSON.parse(data);

    let newProforms = proforms.map((i) => {
      if (i.ID == id) {
        isFound = true;
        return {
          ...i,
          status: "deleted", //solamente cambio el valor status por 'deleted' no lo elimino del array
        };
      } else return i;
    });
    if (!isFound) return "[ERR] Product does not exist";

    //se actualiza el array:
    await fs.promises.writeFile(
      this.#path,
      JSON.stringify(newProforms, null, 2),
    );

    return newProforms.find((i) => i.ID === id);
  }
  async create(){
    if (!fs.existsSync(this.#path)) return "[ERR] DB file does not exists";


    const proform  = {
      id: 4,
      cliente: {
        nombre: "pedro perez",
        ruc: "206051224566"
      },
      products: [
        {id: 1},
        {id: 3},
        {id: 6}
      ],
      status: true
    }
    let data = await fs.promises.readFile(this.#path, "utf-8");
    let proforms = JSON.parse(data);
        proforms.push(proform);

        await fs.promises.writeFile(
          this.#path,
          JSON.stringify(proforms, null, 2),
        );
        return proform;

  }
}

export default ProformsFSDAO;