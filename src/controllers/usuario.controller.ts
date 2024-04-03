import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import bcrypt from "bcryptjs";

export const getUsuarios = async (req: Request, resp: Response) => {
  try {
    /**El busca todos los usuarios */
    const usuarios = await UsuarioModel.find();
    resp.status(200).json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al consultar usuarios`,
    });
  }
};


// busca un usuario en particular

export const getUnUsuarios = async (req: Request, resp: Response)=>{

  try {
    const id = req.params.id;

    /**El busca un cliente */
    const usuario = await UsuarioModel.findById({_id:id});
    resp.status(200).json({
      ok: true,
      usuario:usuario,
      
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar usuario` ,
    });


  }

  
}

// crea un usuario
export const crearUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { login, password } = body;

  try {
    const existeLogin = await UsuarioModel.findOne({
      login: login,
    });
    if (existeLogin) {
      return res.status(409).json({
        ok: false,
        msg: `ya existe un login ${login} creado`,
      });
    }

    const newUsuario = new UsuarioModel({
      ...body,
    });

    const salt = bcrypt.genSaltSync(10);
    newUsuario.password = bcrypt.hashSync(password, salt);
    console.log("contraseña", newUsuario.password);

    const usuarioCreado = await newUsuario.save();

    res.status(200).json({
      ok: true,
      msg: "Usuario creado",
      usuarioCreado,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      ok: false,
      error,
      msg: "Error al crear al usuario, contecte al administrador",
    });
  }
};


// elimina usuario
export const deleteUsuario = async (req: Request, resp: Response) => {
  try {
    // id cliente
    const id = req.params.id;
    // const {body} = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // Eliminar cliente

    const clienteElimino = await UsuarioModel.findByIdAndDelete(id);
    resp.status(200).json({
      ok: true,
      usuario:clienteElimino, 
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al buscar al cliente {$error}` ,
    });


  }
};


export const updateUsuario = async (req: Request, resp: Response) => {
  try {
    // id cliente
    const id = req.params.id;
    const {body} = req;
    // Tambien se puede decalrar de la siguiente forma const body = req.body;

    // console.log('Esto es el Id', id);
    // actualizar cliente

    const usuarioActualizo = await UsuarioModel.findByIdAndUpdate(id, body,{ new:true},);
    resp.status(200).json({
      ok: true,
      usuario:usuarioActualizo, 
    });
  } catch (error) {
    resp.status(400).json({
      ok: false,
      msn: `Error al actualizar al usuario {$error}` ,
    });


  }
};
