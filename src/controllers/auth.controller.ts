import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UsuarioModel from "../models/usuario.model";
import generateJWT from "../helpers/jwt";
import { CustomRequest } from "../middlewares/validar-jwt";

// función que valida el login y el passwor de un usuario

export const login = async (req: Request, res: Response) => {
  const { login: loginUser, password } = req.body;

  try {
    // verificar el login
    const usuario = await UsuarioModel.findOne({ login: loginUser });

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son validas",
      });
    }
    // verificar el password
    const validarPassword = bcrypt.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Las credenciales no son validas",
      });
    }
    console.log(usuario);
    // generar token
    const token = await generateJWT(usuario._id, usuario.login);

    res.json({
      ok: true,
      usuario: usuario,
      token,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
      msg: "Hable con el administrador",
    });
  }
};

// función que genera un nuevo token
export const renewToken = async (req: CustomRequest, res: Response) => {
  const id = req._id;

  try {
    if (typeof id === "undefined") {
      throw new Error("No existe in id");
    }

    const usuario = await UsuarioModel.findById(id);

    /** Generar el token */
    const token = await generateJWT(id.toString());

    res.json({
      ok: true,
      token,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      ok: false,
      error,
      msg: "Error al generar el token, Hable con el administrador",
    });
  }
};

/** controlador que valida correo y numero de documento cuando el usuario olvida la contraseña */
export const olvidoContrasena = async (req: Request, res: Response) => {
  const { email, numeroDocumento } = req.body;
  console.log("Este es el email", email, numeroDocumento);
  try {
    // verificar el login
    const existeUsuario = await UsuarioModel.findOne({
      email: email,
      numeroDocumento: numeroDocumento,
    });
    console.log("Estos son los datos del usuario", existeUsuario);
    if (!existeUsuario) {
      return res.status(401).json({
        ok: false,
        msg: "Las credenciales no son validas",
      });
    }
    console.log(existeUsuario);
    // generar token
    const token = await generateJWT(existeUsuario._id, existeUsuario.login);
    res.json({
      ok: true,
      usuario: existeUsuario,
      token,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
      msg: "Hable con el administrador",
    });
  }
};

/**Falta hacer la función que genera la nueva contraseña y se la asigna al usuario */

export const cambioContrasena = async (req: CustomRequest, res: Response) => {
const id= req._id;
const { password } = req.body;

try {

  if (!password) {
    res.status(400).json({
        ok: false,
        msg: "Por favor digite euna contraseña valida",
     })
 }
  const  newPassword =  bcrypt.hashSync(password, 10);
  
  const actualizarPassword = await UsuarioModel.findByIdAndUpdate({
  _id:id,
  password: newPassword,
  });
  
  if (!actualizarPassword) {
    res.status(400).json({
      ok: false,
      msg: "error al actualizar la contraseña",
    });
}
    res.status(200).json({
    ok: true,
    msg: "Contraseña actualizada",
  });

} catch (error) {
  console.error(error);
  res.status(400).json({
    ok: false,
    msg: "error al actualizar ",
  });
  
}

}


// export const newPassword = async (req: CustomRequest, res: Response) => {
//   const { password } = req.body;
//   const encripPassword =bcrypt.hashSync(password,10)
  
//   const id = req._id;
//   try {
//     const newPasswordUser = await UsuarioModel.findByIdAndUpdate(
//       id,
//       { password: encripPassword }    
//     );
//     res.json({
//       ok: true,
//       usuario: newPasswordUser,
//     });
//   } catch (error) {
//     res.status(400).json({
//       ok: false,
//       error,
//       msg: "Erroe en consulta de usuario",
//     });
//   }
// };
