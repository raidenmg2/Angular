import { Router } from "express";
import { crearClientes , deleteCliente, getClientes, getUnCliente, updatEstadoCliente, updateCliente } from "../controllers/cliente.controler";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validar-campos"
import validateJWT from "../middlewares/validar-jwt";
/**Ruta cliente */

const router = Router();
router.post("/", 
validateJWT,
[    
check( "nombre", "El nombre es obligatorio").not().isEmpty(),
check("email", "El email es obligatorio").not().isEmpty().isEmail(),
check("telefono", "El telefono es obligatorio").not().isEmpty(),
check("tipoDocumento", "El tipo de docuemento es obligatorio").not().isEmpty(),
check("numeroDocumento", "El numero de docuemento es obligatorio").not().isEmpty(),
// validateFields,
],

crearClientes);
router.get("/", getClientes);
router.get("/:id",validateJWT, getUnCliente);
router.put("/:id",validateJWT, updateCliente);
router.delete("/:id",validateJWT, deleteCliente);
router.put("/estado/:id", validateJWT,updatEstadoCliente);

export default router;

