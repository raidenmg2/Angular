"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**aqui se eindica que información vamos a traer de la base de datos  */
const ClienteSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        requiered: true,
    },
    direccion: {
        type: String,
        requiered: true,
    },
    telefono: {
        type: Number,
        requiered: true,
    },
    email: {
        type: String,
        requiered: true,
    },
    tipoDocumento: {
        type: String,
        requiered: true,
    },
    numeroDocumento: {
        type: String,
        requiered: true,
    },
    estado: {
        type: Boolean,
        requiered: true,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updateAt: {
        type: Date,
        default: Date.now(),
    }
});
const ClienteModel = (0, mongoose_1.model)("clientes", ClienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.model.js.map