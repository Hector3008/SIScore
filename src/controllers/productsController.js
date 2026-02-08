import { ProductService } from "../services/services.js";

export const productsController = async (req, res) => {
  const result = await ProductService.getAll(req, res);
  res.status(200).json(result);
};