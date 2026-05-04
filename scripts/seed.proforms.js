/*
// scripts/seed.proformas.js
import "dotenv/config";
import mongoose from "mongoose";
import fs from "fs";
import proformMongoModel from "../src/dao/mongo/proform.mongo.model.js";

await mongoose.connect(process.env.MONGO_URI);
console.log("BD:", mongoose.connection.name);

const raw = JSON.parse(fs.readFileSync("./data/proforms.json", "utf-8"));

await proformMongoModel.insertMany(raw);
console.log(`${raw.length} proformas insertadas`);

await mongoose.disconnect();
*/