"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
/**Ruta autenticación */
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("login", "El login obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.validateFields,
], auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=aut.route.js.map