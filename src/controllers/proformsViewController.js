import {ProformsService } from "../services/services.js";

export const proformsViewController = async (req, res) => {
  const result = await ProformsService.getAll(req, res);
/*testing:
  //console.log("result: ", result)*/
  const proforms = result.payload.filter(
    (proform) => proform.status != "deleted",
  );
  res.render("proforms.handlebars", { proforms });
};

