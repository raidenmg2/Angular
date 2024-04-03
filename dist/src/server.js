"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cliente_route_1 = __importDefault(require("./routes/cliente.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const producto_route_1 = __importDefault(require("./routes/producto.route"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            cliente: "/api/v1/cliente",
            usuario: "/api/v1/usuario",
            auth: "/api/v1/auth",
            producto: "/api/v1/producto",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        // base de datos 
        (0, connection_1.dbConnection)();
        //Metodos Iniciales
        this.middlewares();
        // Aqui siempre llama a las rutas
        this.routes();
    }
    miPrimeraApi() {
        this.app.get("/", (req, res) => res.status(200).json({ msg: "information" }));
    }
    middlewares() {
        this.app.use((0, cors_1.default)()); // permisos para consumir la API desade un dominio especifico
        // Lectura del body
        this.app.use(express_1.default.json());
        //llama función 
        this.miPrimeraApi();
    }
    routes() {
        this.app.use(this.apiPaths.cliente, cliente_route_1.default);
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
        this.app.use(this.apiPaths.auth, auth_route_1.default);
        this.app.use(this.apiPaths.producto, producto_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map