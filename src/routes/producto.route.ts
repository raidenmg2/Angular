import { Router } from "express";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validar-campos"
import validateJWT from "../middlewares/validar-jwt";
import { crearProducto, getProductos } from "../controllers/producto.controller";

const router = Router();
router.post(
"/",
validateJWT,
[    
check("nombre", "El nombre obligatorio").not().isEmpty(),
check("precio", "El precio es obligatorio").not().isEmpty(),
check("categoria", "La categoria es obligatoria").not().isEmpty(),
validateFields,
],
crearProducto
);

router.get("/", validateJWT, getProductos)
export default router;
