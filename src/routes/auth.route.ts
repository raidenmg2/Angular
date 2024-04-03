import { Router } from "express";
import { login, renewToken, olvidoContrasena, cambioContrasena } from "../controllers/auth.controller";
import {check} from "express-validator";
import {validateFields } from "../middlewares/validar-campos"
import validateJWT from "../middlewares/validar-jwt";
import validateJWTPass from "../middlewares/validar-jwt";
/**Ruta autenticación */

/**path: /api/v1/auth */
const router = Router();
router.post(
"/",
[    
check("login", "El login obligatorio").not().isEmpty(),
check("password", "El password es obligatorio").not().isEmpty(),
validateFields,
],
login
);

router.get("/",validateJWT, renewToken);


router.post(
    "/olvidocontrasena",
    [
      check("email", "El login es obligatorio").not().isEmpty(),
      check("numeroDocumento", "El password es obligatorio").not().isEmpty(),
      validateFields,
    ],
    olvidoContrasena
  );


router.put(
    "/cambioContrasena",
    validateJWTPass,
    [    
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
    ],
    cambioContrasena
    );


export default router;
