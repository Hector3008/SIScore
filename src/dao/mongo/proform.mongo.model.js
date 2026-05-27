// src/dao/mongo/proforma.mongo.model.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const productoItemSchema = new Schema(
  {
    status: { type: Schema.Types.Mixed, default: "true" },
    ID: { type: String, default: "pending" },
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
    CANTIDAD: { type: Number, default: 0 },
  },
  { _id: false },
);

const lineaProductoSchema = new Schema(
  {
    status: { type: Boolean, default: true },
    index: { type: Number },
    nombre: { type: String, default: "" },
    monto: { type: String, default: "" },
    cantidad: { type: String, default: "" },
    comentario: { type: String, default: "" },
    total: { type: Number, default: 0 },
    options: [productoItemSchema],
    fotos: { type: [String], default: [] },
    isChecked: { type: Boolean, default: false },
  },
  { _id: false },
);

const clienteEmbedSchema = new Schema(
  {
    nombre: { type: String, default: "" },
    ruc: { type: String, default: "" },
    direccion: { type: String, default: "" },
    provincia: { type: String, default: "" },
    ciudad: { type: String, default: "" },
    telefono: { type: String, default: "" },
    email: { type: String, default: "" },
  },
  { _id: false },
);

const docSchema = new Schema(
  {
    cliente: clienteEmbedSchema,
    pagos: { type: Array, default: [] },
    productos: [lineaProductoSchema],
    esNueva: { type: Boolean, default: false },
    tipo: { type: String, default: "" },
    version: { type: Number, default: 1 },
    code: { type: String, default: "" },
    vendedor: { type: String, default: "" },
    entrega: { type: String, default: "" },
    destino: { type: String, default: "" },
    agencia: { type: String, default: "" },
    atencion: { type: String, default: "" },
    canal_de_venta: { type: String, default: "" },
    forma_de_pago: { type: String, default: "" },
    comprobante: { type: String, default: "" },
    status: { type: Boolean, default: true },
    empresa: { type: String, default: "" },
    fecha: { type: String, default: "" },
    isLocked: {type: Boolean, default: false},
    revision: { type: [String], default: [] },
  },
  { _id: false },
);

const versionSchema = new Schema(
  {
    doc: docSchema,
  },
  { _id: false },
);

const proformaSchema = new Schema(
  {
    payload: {
      doc: {
        ...docSchema.obj,
        versiones: [versionSchema],
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model("Proforma", proformaSchema);
