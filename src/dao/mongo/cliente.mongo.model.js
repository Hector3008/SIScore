import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    id: { type: String, default: undefined },
    status: { type: Boolean, default: true },
    nombre: { type: String, required: true },
    ruc: { type: String, default: "" },
    direccion: { type: String, default: "" },
    provincia: { type: String, default: "" },
    ciudad: { type: String, default: "" },
    telefono: { type: String, default: "" },
    email: { type: String, default: "" },
    canal_de_venta: { type: String, default: "" },
    forma_de_pago: { type: String, default: "" },
    entrega: { type: String, default: "" },
    destino: { type: String, default: "" },
    atencion: { type: String, default: "" },
    agencia: { type: String, default: "" },
    comprobante: { type: String, default: "" },
    vendedor: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Cliente", clienteSchema);
