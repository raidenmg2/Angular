import { Request, Response } from "express";
import ProductoModel from "../models/producto.model";
import { CustomRequest } from "../middlewares/validar-jwt";


export const crearProducto = async (req: CustomRequest, res: Response) => {
  const { body } = req;
  const id = req._id;
  try {
       const productoNuevo = new ProductoModel({usuario: id, ...body} );
    const productoCreado = await productoNuevo.save();

    res.status(200).json({
      ok: true,
      msg: "Producto creado satisfactoriamente",
      cliente: productoCreado,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: "Error al crear el producto",
    });
  }
};

export const getProductos = async ( req: Request, res: Response)=>{

    try {

        //  Devuelve el listado de productos con la información del usuario que lo creo
        const productos = await ProductoModel.find().populate({
            path: "usuario", select:" nombre, numeroDocumento, email"
        });

        res.json({
            ok: true,
            productos,
        });
        
    } catch (error) {
        
        res.status(400).json({
            ok: false,
            msg: `Error al consultar el producto`,
        });



    }

};