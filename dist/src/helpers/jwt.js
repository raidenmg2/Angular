"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const generateJWT = (_id, login = "", expiresIn = process.env.EXPIRES_IN, jwtSecret = process.env.JWT_SECRET) => {
    return new Promise((resolve, reject) => {
        const payload = {
            _id,
            login,
        };
        jwt.sign(payload, jwtSecret, {
            expiresIn: expiresIn,
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject("no se puedo generar el token");
            }
            else
                resolve(token);
        });
    });
};
exports.default = generateJWT;
//# sourceMappingURL=jwt.js.map