import mongoose from "mongoose";
import { google } from "googleapis";
import cron from "node-cron";
import Producto from "../dao/mongo/product.mongo.model.js";

async function getSheetData() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "RESULT!A:O",
  });

  const [headers, ...rows] = res.data.values;

  return rows.map((row) => {
    const r = {};
    headers.forEach((h, i) => (r[h] = row[i] || ""));
    return r;
  });
}

async function syncStock(io) {
  console.log(`[syncStock] iniciando — ${new Date().toISOString()}`);

  try {
    const rows = await getSheetData();

    const documents = rows
      .filter((r) => r.DICTIONARY)
      .map((r) => ({
        status: "true",
        CODIGO_FORMATEADO: r.DICTIONARY,
        CODIGO: r.CODE,
        STOCK_LV: Number(r.LV || 0),
        STOCK_SJL: Number(r.SJL || 0),
        STOCK: Number(r.TOTAL || 0),
        EQUIVALENTES_STOCK: String(r["EQUIVALENTE + STOCK"] || "").trim(),
        DESCRIPCION: String(r["NOMBRE COMERCIAL"] || "").trim(),
        FAMILIA: String(r.FAMILIA || "").trim(),
        SUBFAMILIA: String(r.SUBFAMILIA || "").trim(),
        PROVEEDOR: String(r.PROVEEDOR || "").trim(),
        MARCA: String(r.MARCA || "").trim(),
        UBICACION: "pending",
      }));

    const deleted = await Producto.deleteMany({});
    const inserted = await Producto.insertMany(documents);

    console.log(
      `[syncStock] ✓ ${deleted.deletedCount} eliminados, ${inserted.length} insertados`,
    );

    // 👇 emite la lista actualizada a todos los clientes conectados
    if (io) {
      io.emit("updatedStock", documents);
      console.log(
        `[syncStock] ✓ socket emitido — ${documents.length} productos`,
      );
    }
  } catch (err) {
    console.error("[syncStock] ✗ error:", err.message);
  }
}

export function initSyncStock(io) {
  //cron.schedule("0 */1 * * *", syncStock);
  cron.schedule("* * * * *", () => syncStock(io));
  syncStock(io); // corre inmediatamente al arrancar
  console.log("[syncStock] cron registrado");
}

export { syncStock };
