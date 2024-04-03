"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.deleteUsuario = exports.crearUsuario = exports.getUnUsuarios = exports.getUsuarios = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsuarios = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /**El busca todos los usuarios */
        const usuarios = yield usuario_model_1.default.find();
        resp.status(200).json({
            ok: true,
            usuarios,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al consultar usuarios`,
        });
    }
});
exports.getUsuarios = getUsuarios;
// busca un usuario en particular
const getUnUsuarios = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        /**El busca un cliente */
        const usuario = yield usuario_model_1.default.findById({ _id: id });
        resp.status(200).json({
            ok: true,
            usuario: usuario,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar usuario`,
        });
    }
});
exports.getUnUsuarios = getUnUsuarios;
// crea un usuario
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { login, password } = body;
    try {
        const existeLogin = yield usuario_model_1.default.findOne({
            login: login,
        });
        if (existeLogin) {
            return res.status(409).json({
                ok: false,
                msg: `ya existe un login ${login} creado`,
            });
        }
        const newUsuario = new usuario_model_1.default(Object.assign({}, body));
        const salt = bcryptjs_1.default.genSaltSync(10);
        newUsuario.password = bcryptjs_1.default.hashSync(password, salt);
        console.log("contraseña", newUsuario.password);
        const usuarioCreado = yield newUsuario.save();
        res.status(200).json({
            ok: true,
            msg: "Usuario creado",
            usuarioCreado,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear al usuario, contecte al administrador",
        });
    }
});
exports.crearUsuario = crearUsuario;
// elimina usuario
const deleteUsuario = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id cliente
        const id = req.params.id;
        // const {body} = req;
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // Eliminar cliente
        const clienteElimino = yield usuario_model_1.default.findByIdAndDelete(id);
        resp.status(200).json({
            ok: true,
            usuario: clienteElimino,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar al cliente {$error}`,
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const updateUsuario = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id cliente
        const id = req.params.id;
        const { body } = req;
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // actualizar cliente
        const usuarioActualizo = yield usuario_model_1.default.findByIdAndUpdate(id, body, { new: true });
        resp.status(200).json({
            ok: true,
            usuario: usuarioActualizo,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al actualizar al usuario {$error}`,
        });
    }
});
exports.updateUsuario = updateUsuario;
//# sourceMappingURL=usuario.controller.js.map