import mongoose from "mongoose";
import userMongoScheema from "../src/dao/mongo/user.mongo.scheema.js";

import "dotenv/config";

await mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/tu_db",
);

const existe = await userMongoScheema.findOne({
  email: "LazaroPareja@maximportaciones.com",
});

if (existe) {
  console.log("⚠️  El usuario admin ya existe");
} else {
 await userMongoScheema.create({
   nombre: "Lazaro Pareja",
   email: "LazaroPareja@maximportaciones.com",
   password: "LazaroPareja1234",
   rol: "operador",
   activo: true,
   permissions: ["creacion", "produccion"],
 });
  console.log("✅ Usuario admin creado");
  console.log("   Email:    LazaroPareja@maximportaciones.com");
  console.log("   Password: LazaroPareja1234");
}

await mongoose.disconnect();
