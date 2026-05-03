// src/dao/mongo/producto.mongo.dao.js
import Product from "./product.mongo.model.js";

class ProductoMongoDAO {
  async getAll() {
    const products = await Product.find({ status: { $ne: "deleted" } });
    return {
      status: "200",
      payload: products,
    };
  }

  async getByID(id) {
    const product = await Product.findById(id);
    if (!product) return "ERROR: producto no encontrado";
    return product;
  }

  async deleteByID(id) {
    const product = await Product.findByIdAndUpdate(
      id,
      { status: "deleted" },
      { new: true },
    );
    if (!product) return "[ERR] Product does not exist";
    return product;
  }
}

export default ProductoMongoDAO;
