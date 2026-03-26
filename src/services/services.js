import {
  productDao, proformsDAO
} from "./persistenceFactory.js";

import {
  ProductRepository, ProformsRepository
} from "./repository.js";


export const ProductService = new ProductRepository(new productDao());
export const ProformsService = new ProformsRepository(new proformsDAO());
