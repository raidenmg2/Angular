import dotenv from "dotenv";
import Server from "./src/server";


/**CONFIGURAR .env */
dotenv.config();

const server = new Server();
server.listen();