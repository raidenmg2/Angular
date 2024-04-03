"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const producto_controller_1 = require("../controllers/producto.controller");
const router = (0, express_1.Router)();
router.post("/", validar_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("precio", "El precio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("categoria", "La categoria es obligatoria").not().isEmpty(),
    validar_campos_1.validateFields,
], producto_controller_1.crearProducto);
router.get("/", validar_jwt_1.default, producto_controller_1.getProductos);
exports.default = router;
//# sourceMappingURL=producto.route.js.map