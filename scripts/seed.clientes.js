//así cargué los clientes a mi bd en mongo

/*import "dotenv/config";
import mongoose from "mongoose";
import fs from "fs";
import clienteMongoModel from "../src/dao/mongo/cliente.mongo.model.js";

await mongoose.connect(process.env.MONGO_URI);

const raw = JSON.parse(fs.readFileSync("./data/clientes.json", "utf-8"));

const clientes = raw.map((item) => ({
  status: item.status,
  ...item.payload.doc,
}));

await clienteMongoModel.insertMany(clientes);
await mongoose.connect(process.env.MONGO_URI);
console.log("BD:", mongoose.connection.name);
console.log(`${clientes.length} clientes insertados`);
await mongoose.disconnect();*/