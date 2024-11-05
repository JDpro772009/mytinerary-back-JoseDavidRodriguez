import { Schema,model } from "mongoose";

let coleccion = "Itineraries"

let schema = new Schema({
    foto:{type:Array,required:true},
    nombre:{type:String,required:true},
    precio:{type:Array,required:true},
    duracion:{type:Number,required:true},
    likes:{type:Number,required:true},
    hashtags:{type:Array,required:true}
})

let Itinerary = model(coleccion,schema)


export default Itinerary