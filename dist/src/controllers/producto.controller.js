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
exports.getProductos = exports.crearProducto = void 0;
const producto_model_1 = __importDefault(require("../models/producto.model"));
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req._id;
    try {
        const productoNuevo = new producto_model_1.default(Object.assign({ usuario: id }, body));
        const productoCreado = yield productoNuevo.save();
        res.status(200).json({
            ok: true,
            msg: "Producto creado satisfactoriamente",
            cliente: productoCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Error al crear el producto",
        });
    }
});
exports.crearProducto = crearProducto;
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  Devuelve el listado de productos con la información del usuario que lo creo
        const productos = yield producto_model_1.default.find().populate({
            path: "usuario", select: " nombre, numeroDocumento, email"
        });
        res.json({
            ok: true,
            productos,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error al consultar el producto`,
        });
    }
});
exports.getProductos = getProductos;
//# sourceMappingURL=producto.controller.js.map