import { Schema,model } from "mongoose";

let coleccion = "Cities"

let schema = new Schema({
    nombre:{type:String,required:true},
    foto:{type:String,required:true},
    pais:{type:String,required:true},
    continente:{type:String,required:true},
    descripcion:{type:String,required:true},
    divisa:{type:String,required:true},
    iternario:{type:Schema.Types.ObjectId, ref:"Itineraries", required:false}
})

let City = model(coleccion,schema)


export default City