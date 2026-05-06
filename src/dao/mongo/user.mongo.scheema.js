import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import "dotenv/config";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/tu_db";
console.log("🔌 Conectando a:", uri);

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    enum: ["admin", "operador", "visualizador"],
    default: "visualizador",
  },
  activo: { type: Boolean, default: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
//  next();
});

userSchema.methods.verificarPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
