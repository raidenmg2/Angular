"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se eindica que información vamos a traer de la base de datos  */
const ProductoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() },
    peso: { type: String, required: true },
    ip: { type: String },
    estado: { type: Boolean, required: true, default: true },
    caracteristicas: { type: Object, required: true },
    programasInstalados: { type: Object, required: true },
    distribuidor: { type: Object, required: true },
    opiniones: { type: Object },
    usuario: { type: mongoose_1.Schema.Types.ObjectId, ref: "Usuario", required: true },
});
const ProductoModel = (0, mongoose_1.model)("producto", ProductoSchema);
exports.default = ProductoModel;
//# sourceMappingURL=prodcuto.model.js.map