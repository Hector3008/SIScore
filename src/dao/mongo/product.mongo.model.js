import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    status: { type: String, default: "true" },
    CODIGO_FORMATEADO: { type: String, default: "" },
    CODIGO: { type: String, default: "" },
    STOCK_LV: { type: String, default: "" },
    STOCK_SJL: { type: String, default: "" },
    STOCK: { type: String, default: "" },
    EQUIVALENTES_STOCK: { type: String, default: "" },
    DESCRIPCION: { type: String, default: "" },
    FAMILIA: { type: String, default: "" },
    SUBFAMILIA: { type: String, default: "" },
    PROVEEDOR: { type: String, default: "" },
    MARCA: { type: String, default: "" },
    UBICACION: { type: String, default: "" },
    PRECIO_SUGERIDO: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Producto", productoSchema);
