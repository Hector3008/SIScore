import { ProductService } from "../services/services.js";

export const proformsViewController = async (req, res) => {
  const result = await ProductService.getAll(req, res);

  const products = result.payload.filter(
    (product) => product.status != "deleted",
  );
  res.render("proformsSistem.handlebars", { products });
};
