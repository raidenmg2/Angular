"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se eindica que información vamos a traer de la base de datos  */
const UsuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, requiered: true },
    email: { type: String, requiered: true, unique: true },
    tipoDocumento: { type: String, requiered: true },
    numeroDocumento: { type: String, requiered: true, unique: true },
    login: { type: String, requiered: true, unique: true },
    password: { type: String, requiered: true },
    rol: { type: String, requiered: true, default: "ADMIN" },
    estado: { type: Boolean, requiered: true, default: true },
    createdAt: { type: Date, default: Date.now(), },
});
const UsuarioModel = (0, mongoose_1.model)("usuario", UsuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map