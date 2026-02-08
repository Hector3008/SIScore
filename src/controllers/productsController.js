import { ProductService } from "../services/services.js";

export const productsController = async (req, res) => {
  const result = await ProductService.getAll(req, res);
  res.status(200).json(result);
};

export const productsViewController = async (req,res)=>{
  
  const result = await ProductService.getAll(req, res);

  const products = result.payload.filter(product => product.status != "deleted")
  res.render("products.handlebars",{products})
}

export const deleteProductController = async (req, res) => {
  const id = req.params.pid;
  const productToDelete = await ProductService.getByID(id);
    console.log("id: ",id)
    console.log("productToDelete: ", productToDelete);
  if (productToDelete === null) {
    return res
      .status(404)
      .json({ status: "error", error: "Product does not found" });
  }

  let products;
  let body = {
    intro: "tu producto ha sido eliminado satisfactoriamente",
    table: {
      data: [
        {
          productToDelete,
        },
      ],
    },
    outro: "si crees que ha sido un error por favor comunicate con nosotros",
  };

  try {
    products = await ProductService.deleteByID(id);
    res.status(200).json({ status: "success", payload: products });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
};
export const productController = async(req, res)=>{
    const id = req.params.pid;

  const result = await ProductService.getByID(id);
  
  res.status(200).json(result)
}