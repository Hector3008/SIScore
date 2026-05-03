/*
// scripts/seed.productos.js
import "dotenv/config";
import mongoose from "mongoose";
import fs from "fs";
import Producto from "../src/dao/mongo/product.mongo.model.js";

await mongoose.connect(process.env.MONGO_URI);
console.log("BD:", mongoose.connection.name);

const raw = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

await Producto.insertMany(raw);
console.log(`${raw.length} productos insertados`);

await mongoose.disconnect();
*/