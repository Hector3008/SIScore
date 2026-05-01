import {
  clienteDAO,
  productDao, proformsDAO
} from "./persistenceFactory.js";

import {
  ClienteRepository,
  ProductRepository, ProformsRepository
} from "./repository.js";


export const ProductService = new ProductRepository(new productDao());
export const ProformsService = new ProformsRepository(new proformsDAO());
export const ClienteService = new ClienteRepository(new clienteDAO());
