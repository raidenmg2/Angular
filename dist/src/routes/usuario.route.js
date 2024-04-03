"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
/**Ruta usuario */
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de docuemento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de docuemento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.validateFields,
], usuario_controller_1.crearUsuario);
router.get("/", validar_jwt_1.default, usuario_controller_1.getUsuarios);
router.get("/:id", validar_jwt_1.default, usuario_controller_1.getUnUsuarios);
router.delete("/:id", validar_jwt_1.default, usuario_controller_1.deleteUsuario);
router.put("/:id", validar_jwt_1.default, usuario_controller_1.updateUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map