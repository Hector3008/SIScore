import { ProformsService } from "../services/services.js";

export const proformsController = async (req, res) => {
  const result = await ProformsService.getAll(req, res);
  res.status(200).json(result);
};
export const proformController = async (req, res) => {
  try {
    const id = req.params.pid;
    const result = await ProformsService.getByID(id);
    if (result === null) {
      return res.status(404).json({ status: "error", error: "Not found" });
    }
    res.status(200).json({ status: "success", payload: result });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
      test: "this is a catch message",
    });
  }
};
export const proformDeleteController = async (req, res) => {

  try {
    const id = req.params.pid;
    const result = await ProformsService.deleteByID(id);

    if (result === null) {
      return res.status(404).json({ status: "error", error: "Not found" });
    }
    res.status(200).json({ status: "success", payload: result });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
      test: "this is a catch message",
    });
  }
};

export const proformCreateController = async (req,res)=>
{
  const data = req.body;

  const result = await ProformsService.create(data);
  res.status(200).json(result);
}