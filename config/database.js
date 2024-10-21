import mongoose from "mongoose";


let url = process.env.URL

mongoose.connect(url)
.then(()=>console.log("Se conecto exitosamente a la base de datos"))
.catch((error)=>console.log(error))