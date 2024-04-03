import { Model, Schema, model } from "mongoose";

/**aqui se eindica que información vamos a traer de la base de datos  */
const UsuarioSchema = new Schema({
    nombre: {type:String,requiered: true},
    email:{type:String,requiered: true,unique: true },
    tipoDocumento:{ type:String,requiered: true},
    numeroDocumento:{type:String,requiered: true,unique:true},
    login:{type:String,requiered: true, unique:true},
    password:{type:String,requiered: true},
    rol:{type:String,requiered: true, default:"ADMIN"},
    estado:{type: Boolean,requiered: true,default:true},
    createdAt:{type:Date,default:Date.now(),},
    
});

const UsuarioModel: Model<any>= model("usuario", UsuarioSchema);
 export default UsuarioModel;