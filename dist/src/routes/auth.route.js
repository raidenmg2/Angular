"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validar_jwt_2 = __importDefault(require("../middlewares/validar-jwt"));
/**Ruta autenticación */
/**path: /api/v1/auth */
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.validateFields,
], auth_controller_1.login);
router.get("/", validar_jwt_1.default, auth_controller_1.renewToken);
router.post("/olvidocontrasena", [
    (0, express_validator_1.check)("email", "El login es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.validateFields,
], auth_controller_1.olvidoContrasena);
router.put("/cambioContrasena", validar_jwt_2.default, [
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.validateFields,
], auth_controller_1.cambioContrasena);
exports.default = router;
//# sourceMappingURL=auth.route.js.map