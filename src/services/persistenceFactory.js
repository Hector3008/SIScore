// persistenceFactory.js
let PERSISTENCE = "mongo";

const FS_DAOS = {
  product: "../dao/FS/product.fs.dao.js",
  proforms: "../dao/FS/proforms.fs.dao.js",
  cliente: "../dao/FS/cliente.fs.dao.js",
};

const MONGO_DAOS = {
  product: "../dao/FS/product.fs.dao.js",
  proforms: "../dao/FS/proforms.fs.dao.js",
  cliente: "../dao/mongo/cliente.mongo.dao.js",
};

const DAOS = PERSISTENCE === "mongo" ? MONGO_DAOS : FS_DAOS;

export const { default: productDao } = await import(DAOS.product);
export const { default: proformsDAO } = await import(DAOS.proforms);
export const { default: clienteDAO } = await import(DAOS.cliente);
