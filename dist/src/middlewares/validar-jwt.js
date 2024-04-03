"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const validateJWT = (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: "no hay token en la petición",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        req._id = _id;
        next();
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token invalido"
        });
    }
};
const validateJWTPass = (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: "no hay token en la petición",
        });
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_PASS);
        req._id = _id;
        next();
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "Token invalido"
        });
    }
};
exports.default = validateJWT;
//# sourceMappingURL=validar-jwt.js.map