import { ClienteService } from "../services/services.js";
import ClienteMongoDAO from "../dao/mongo/cliente.mongo.dao.js";

export const clienteController = async (req, res) => {
  const result = await ClienteService.getAll(req, res);
  res.status(200).json(result);
};

const clienteDao = new ClienteMongoDAO();

export const clienteControllerForMongo = async (req, res) => {
  try {
    const result = await clienteDao.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};