import {
  productDao, proformsDAO
} from "./persistenceFactory.js";

import {
  ProductRepository
} from "./repository.js";


export const ProductService = new ProductRepository(new productDao());
export const ProformsService = new proformsDAO(new proformsDAO());
