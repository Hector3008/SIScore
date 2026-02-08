//import cfg from "../config/config.js";
//console.log("persistencia en: ", cfg.PERSISTENCE);

let PERSISTENCE = "FS";

export let productDao;

switch (PERSISTENCE) {
  case "FS":
    const { default: ProductFSDAO } =
      await import("../dao/FS/product.fs.dao.js");
    productDao = ProductFSDAO;
    break;

  case "mongo":
    const { default: ProductMongoDAO } =
      await import("../dao/product.dao.mongo.js");
    productDao = ProductMongoDAO;
    break;

  default:
    throw new Error(`Unsupported persistence type: ${PERSISTENCE}`);
}