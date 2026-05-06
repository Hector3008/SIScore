/*import mongoose from "mongoose";
import userMongoScheema from "../src/dao/mongo/user.mongo.scheema.js";

import "dotenv/config";

await mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/tu_db",
);

const existe = await userMongoScheema.findOne({ email: "admin@logistica.com" });

if (existe) {
  console.log("⚠️  El usuario admin ya existe");
} else {
  await userMongoScheema.create({
    nombre: "Administrador",
    email: "admin@logistica.com",
    password: "Admin1234",
    rol: "admin",
    activo: true,
  });
  console.log("✅ Usuario admin creado");
  console.log("   Email:    admin@logistica.com");
  console.log("   Password: Admin1234");
}

await mongoose.disconnect();
*/