import { ProductService } from "./services/services.js"

const products = await ProductService.getAll();
console.log(products);
