"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controler_1 = require("../controllers/cliente.controler");
const express_validator_1 = require("express-validator");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
/**Ruta cliente */
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("telefono", "El telefono es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de docuemento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de docuemento es obligatorio").not().isEmpty(),
    // validateFields,
], cliente_controler_1.crearClientes);
router.get("/", cliente_controler_1.getClientes);
router.get("/:id", validar_jwt_1.default, cliente_controler_1.getUnCliente);
router.put("/:id", validar_jwt_1.default, cliente_controler_1.updateCliente);
router.delete("/:id", validar_jwt_1.default, cliente_controler_1.deleteCliente);
router.put("/estado/:id", validar_jwt_1.default, cliente_controler_1.updatEstadoCliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map