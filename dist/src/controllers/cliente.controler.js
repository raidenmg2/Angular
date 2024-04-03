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
exports.updatEstadoCliente = exports.deleteCliente = exports.updateCliente = exports.getUnCliente = exports.getClientes = exports.crearClientes = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
/**se crea el cliente  */
const crearClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        console.log(req);
        console.log(body);
        const clienteNuevo = new cliente_model_1.default(body);
        const clienteCreado = yield clienteNuevo.save();
        res.status(200).json({
            ok: true,
            msg: "Cliente registrado",
            cliente: clienteCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al crear al cliente",
        });
    }
});
exports.crearClientes = crearClientes;
/**busca todos los clientes de la base de datos */
const getClientes = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /**El busca todos los clientes */
        const clientes = yield cliente_model_1.default.find();
        resp.status(200).json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar a los clientes {$error}`,
        });
    }
});
exports.getClientes = getClientes;
/** buscar un cliente en particular */
const getUnCliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // console.log('Esto es el Id', id);
        // console.log('Esto es el Id', req);
        /**El busca un cliente */
        const clientes = yield cliente_model_1.default.findById({ _id: id });
        resp.status(200).json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar al cliente {$error}`,
        });
    }
});
exports.getUnCliente = getUnCliente;
/**se actualiza la información de un cliente */
const updateCliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id cliente
        const id = req.params.id;
        const { body } = req;
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // actualizar cliente
        const clienteActualizo = yield cliente_model_1.default.findByIdAndUpdate(id, body, { new: true });
        resp.status(200).json({
            ok: true,
            clientes: clienteActualizo,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar al cliente {$error}`,
        });
    }
});
exports.updateCliente = updateCliente;
/** se elimina a un cliente  */
const deleteCliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id cliente
        const id = req.params.id;
        // const {body} = req;
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // Eliminar cliente
        const clienteElimino = yield cliente_model_1.default.findByIdAndDelete(id);
        resp.status(200).json({
            ok: true,
            clientes: clienteElimino,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar al cliente {$error}`,
        });
    }
});
exports.deleteCliente = deleteCliente;
// actualizar estado
const updatEstadoCliente = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // id cliente
        const id = req.params.id;
        // const {body} = req;
        // Tambien se puede decalrar de la siguiente forma const body = req.body;
        // console.log('Esto es el Id', id);
        // actualizar cliente
        const clientEstadoActualizo = yield cliente_model_1.default.findByIdAndUpdate(id, { estado: false }, { new: true });
        resp.status(200).json({
            ok: true,
            clientes: clientEstadoActualizo,
        });
    }
    catch (error) {
        resp.status(400).json({
            ok: false,
            msn: `Error al buscar al cliente {$error}`,
        });
    }
});
exports.updatEstadoCliente = updatEstadoCliente;
// export const updatEstadoCliente = async (req: Request, resp: Response) => {
//   try {
//     // id cliente
//     const id = req.params.id;
//     // const {body} = req;
//     // Tambien se puede decalrar de la siguiente forma const body = req.body;
//     // console.log('Esto es el Id', id);
//     // actualizar cliente
//     const clientEstadoActualizo = await ClienteModel.findByIdAndUpdate(id, {estado: false}, {new: true} );
//     resp.status(200).json({
//       ok: true,
//       clientes:clientEstadoActualizo, 
//     });
//   } catch (error) {
//     resp.status(400).json({
//       ok: false,
//       msn: `Error al buscar al cliente {$error}` ,
//     });
//   }
// };
// el siguinete caracter  `` se hace con alt + 96
//# sourceMappingURL=cliente.controler.js.map