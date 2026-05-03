import clienteMongoModel from "./cliente.mongo.model.js";

class ClienteMongoDAO {
  async getAll() {
    const clientes = await clienteMongoModel.find({ status: true });
    return {
      status: "200",
      payload: clientes,
    };
  }

  async getById(id) {
    const cliente = await clienteMongoModel.findById(id);
    return {
      status: "200",
      payload: cliente,
    };
  }

  async create(data) {
    const cliente = await clienteMongoModel.create(data);
    return {
      status: "201",
      payload: cliente,
    };
  }

  async update(id, data) {
    const cliente = await clienteMongoModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return {
      status: "200",
      payload: cliente,
    };
  }

  async delete(id) {
    const cliente = await clienteMongoModel.findByIdAndUpdate(
      id,
      { status: false },
      { new: true },
    );
    return {
      status: "200",
      payload: cliente,
    };
  }
}

export default ClienteMongoDAO;
