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

  console.log("HEADERS:", JSON.stringify(headers));

  return rows.map((row) => {
    // rellena la fila hasta el largo de headers
    const paddedRow = Array.from(
      { length: headers.length },
      (_, i) => row[i] ?? "",
    );

    const r = {};
    headers.forEach((h, i) => {
      r[h] = String(paddedRow[i]).trim();
    });
    return r;
  });
}

async function syncStock(io) {
  console.log(`[syncStock] iniciando — ${new Date().toISOString()}`);

  try {
    const rows = await getSheetData();

    console.log("rows[0]", rows[0]);
    console.log("rows[1]", rows[1]);

    const documents = rows
      .filter((r) => r.DICTIONARY)
      .map((r) => ({
        status: "true",
        CODIGO_FORMATEADO: r.DICTIONARY,
        CODIGO: r.CODE,
        STOCK_LV: Number(r.LV) || 0,
        STOCK_SJL: Number(r.SJL) || 0,
        STOCK: Number(r.TOTAL) || 0,
        EQUIVALENTES_STOCK: r["EQUIVALENTE + STOCK"],
        DESCRIPCION: r["NOMBRE COMERCIAL"],
        FAMILIA: r.FAMILIA,
        SUBFAMILIA: r.SUBFAMILIA,
        PROVEEDOR: r.PROVEEDOR,
        MARCA: r.MARCA,
        UBICACION: r.UBICACION,
      }));

    const deleted = await Producto.deleteMany({});
    const inserted = await Producto.insertMany(documents);

    console.log(
      `[syncStock] ✓ ${deleted.deletedCount} eliminados, ${inserted.length} insertados`,
    );

    if (io) {
      io.emit("stockActualizado", { count: documents.length });
      console.log(
        `[syncStock] ✓ socket emitido — ${documents.length} productos`,
      );
    }
  } catch (err) {
    console.error("[syncStock] ✗ error:", err.message);
  }
}

export function initSyncStock(io) {
  cron.schedule("* * * * *", () => syncStock(io));
  syncStock(io);
  console.log("[syncStock] cron registrado");
}

export { syncStock };
