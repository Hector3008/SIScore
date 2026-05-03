import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    status: { type: String, default: "true" },
    CODIGO_FORMATEADO: { type: String, default: "" },
    CODIGO: { type: String, default: "" },
    STOCK_LV: { type: Number, default: 0 },
    STOCK_SJL: { type: Number, default: 0 },
    STOCK: { type: Number, default: 0 },
    EQUIVALENTES_STOCK: { type: String, default: "" },
    DESCRIPCION: { type: String, default: "" },
    FAMILIA: { type: String, default: "" },
    SUBFAMILIA: { type: String, default: "" },
    PROVEEDOR: { type: String, default: "" },
    MARCA: { type: String, default: "" },
    UBICACION: { type: String, default: "pending" },
  },
  { timestamps: true },
);

export default mongoose.model("Producto", productoSchema);
