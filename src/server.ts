import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import  clienteRoutes  from "./routes/cliente.route";
import  usuarioRoutes  from "./routes/usuario.route";
import  authRoutes  from "./routes/auth.route";
import productoRoutes from "./routes/producto.route"; 
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    cliente:"/api/v1/cliente",
    usuario:"/api/v1/usuario",
    auth: "/api/v1/auth",
    producto: "/api/v1/producto",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    // base de datos 
    dbConnection();

    //Metodos Iniciales
    this.middlewares();

    // Aqui siempre llama a las rutas
    this.routes();
    
  }

  miPrimeraApi(){
    this.app.get("/",(req: Request, res: Response) => 
    res.status(200).json({ msg:"information"})
    ); 

  }

middlewares(){
  this.app.use(cors()); // permisos para consumir la API desade un dominio especifico
  // Lectura del body
  this.app.use(express.json());
  //llama función 
  this.miPrimeraApi();
}

routes():void{
this.app.use(this.apiPaths.cliente, clienteRoutes);
this.app.use(this.apiPaths.usuario, usuarioRoutes);
this.app.use(this.apiPaths.auth, authRoutes);
this.app.use(this.apiPaths.producto, productoRoutes);

}


  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

export default Server;
