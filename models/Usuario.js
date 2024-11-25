import { Schema,model } from "mongoose";

let coleccion = "Usuarios"

let schema = new Schema({
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    correo:{type:String,required:true},
    foto:{type:String,required:true},
    pais:{type:String,required:true},
    contraseña:{type:String,required:true},
    online:{type:Boolean}
})

let Usuario = model(coleccion,schema)


export default Usuario