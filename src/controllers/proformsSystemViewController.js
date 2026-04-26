import { ProductService, ProformsService } from "../services/services.js";


export const proformsSystemViewController = async (req, res) => {
  const productRequest = await ProductService.getAll(req, res);

  const products = productRequest.payload.filter(
    (product) => product.status != "deleted",
  );
  const proformRequest = await ProformsService.getAll(req, res);
  const proforms = proformRequest.payload;
  res.render("proformSystem.handlebars", { products, proforms });
};


