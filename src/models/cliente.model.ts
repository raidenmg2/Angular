import { Model, Schema, model } from "mongoose";

/**aqui se eindica que información vamos a traer de la base de datos  */
const ClienteSchema = new Schema({
    nombre: {
           type:String,
           requiered: true,
    },
    direccion:{
        type:String,
        requiered: true,
    },

    telefono:{
        type:Number,
        requiered: true,
    },
    email:{

        type:String,
        requiered: true,
    },
    tipoDocumento:{
        type:String,
        requiered: true,
    
    },
   numeroDocumento:{
        type:String,
        requiered: true,
    },
    estado:{
        type: Boolean,
        requiered: true,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    updateAt:{
        type:Date,
        default:Date.now(),
    }
    
    

});

const ClienteModel: Model<any>= model("clientes", ClienteSchema);
 export default ClienteModel;