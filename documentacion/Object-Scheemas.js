const Modelo = {
  _ID: INT,
  Nombre: String,
  Descripcion: String,
  Categoria: Object(Categoria),
  Tipo: Object(Tipo),
  Quant: Object(Product).Modelo ++,
  Equivalente: Array(Object(Product)) || []
};
//es importante establecer que el objeto producto es distinto al objeto modelo porque el objeto modelo es el que permite construir informes y se alimenta del objeto Product (cantidad). El objeto Product tendrá información más detallada y particular como el invoice (factura) en el que vino y algún comentario u observacion adicional.

const Product = {
  _ID: INT,
  Modelo: Object(Modelo),
  Invoice: Object(Invoice) || undefined,
  Comentarios: String
}

const Invoice = {
  _ID: INT,
  Nombre: String,
  date: Date(),
  Content: [],
  products: [Object(Product)]
}

const User = {}
const Cliente = {}
const Vendedor = {}
const Operacion = {}
const Venta = {}
const Cambio = {}
const Devolucion = {}
const Cobro = {}
const Reembolso = {}
const Deuda = {}