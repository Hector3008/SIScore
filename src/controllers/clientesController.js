import { ClienteService } from "../services/services.js";

export const clienteController = async (req, res) => {
  const result = await ClienteService.getAll(req, res);
  res.status(200).json(result);
};


