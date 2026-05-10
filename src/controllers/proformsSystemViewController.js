import { ClienteService, ProductService, ProformsService } from "../services/services.js";


export const loginController = async (req, res) => {
    res.render("login.handlebars");
};

export const proformsSystemViewController = async (req, res) => {
  const productRequest = await ProductService.getAll(req, res);

  const products = productRequest.payload.filter(
    (product) => product.status != "deleted",
  );
  const proformRequest = await ProformsService.getAll(req, res);
  const proforms = proformRequest.payload;

  const clientesRequest = await ClienteService.getAll(req,res)
  const clientes = clientesRequest.payload;
  
  const permisos = req.user.permissions.includes("all")
    ? ["creacion", "produccion", "revision", "bandeja"]
    : req.user.permissions.filter((p) => p !== "all");
  res.render("proformSystem.handlebars", {
    products,
    proforms,
    clientes,
    user: req.user,
    permisos
  });
};

export const produccionViewController = async (req, res)=>{
  const proformRequest = await ProformsService.getAll(req, res);
  const proforms = proformRequest.payload;

  const permisos = req.user.permissions.includes("all")
    ? ["creacion", "produccion", "revision", "bandeja"]
    : req.user.permissions.filter((p) => p !== "all");

  res.render("proformSystem.produccion.handlebars", {
    proforms,
    user: req.user,
    rutaActiva: "produccion",
    permisos
  });
}

export const revisionViewController = async (req, res)=>{
  const proformRequest = await ProformsService.getAll(req, res);
  const proforms = proformRequest.payload;
  
  const permisos = req.user.permissions.includes("all")
    ? ["creacion", "produccion", "revision", "bandeja"]
    : req.user.permissions.filter((p) => p !== "all");
  res.render("proformSystem.revision.handlebars", { proforms, user: req.user, permisos });
}


export const bandejaViewController = async (req, res) => {
  const proformRequest = await ProformsService.getAll(req, res);
  const proforms = proformRequest.payload;
  
  const permisos = req.user.permissions.includes("all")
    ? ["creacion", "produccion", "revision", "bandeja"]
    : req.user.permissions.filter((p) => p !== "all");
  res.render("proformSystem.bandeja.handlebars", { proforms, user: req.user, permisos });
};

