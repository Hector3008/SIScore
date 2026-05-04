import Proforma from "./proform.mongo.model.js";

class ProformaMongoDAO {
  async getAll() {
    const proforms = await Proforma.find();
    return {
      status: "200",
      payload: proforms,
    };
  }

  async getByCode(code) {
    const found = await Proforma.findOne({ "payload.doc.code": code });
    if (!found) return "ERROR: proforma no encontrada";
    return found;
  }

  async deleteByID(id) {
    const found = await Proforma.findByIdAndUpdate(
      id,
      { $set: { "payload.doc.status": "deleted" } },
      { new: true },
    );
    if (!found) return "[ERR] Product does not exist";
    return found;
  }

  async create(data) {
    const proforma = await Proforma.create(data);
    return proforma;
  }

  async updateByCode(code, updateProform) {
    console.log("code from updateProform: ", updateProform);

    const found = await Proforma.findOneAndUpdate(
      { "payload.doc.code": code },
      { $set: { "payload.doc": updateProform.payload.doc } },
      { new: true },
    );

    if (!found) return null;
    return found;
  }
}

export default ProformaMongoDAO;
