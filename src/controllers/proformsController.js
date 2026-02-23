import { ProformsService } from "../services/services.js";

export const proformsController = async (req, res) => {
  const result = await ProformsService.getAll(req, res);
  res.status(200).json(result);
};