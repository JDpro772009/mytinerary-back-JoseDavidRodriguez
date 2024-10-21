import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./routers/index.js"
import controlador_no_encontrado from "./middlewares/controlador_no_encontrado.js";
import error_handler from "./middlewares/controlador_errores.js";
import controlador_descripcion_peticiones from "./middlewares/controlador_descripcion_peticiones.js";

const server = express()
const PORT = process.env.PORT || 2020

const ready = ()=> console.log("se conecto el server en el puerto:"+PORT);


server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan("dev"))


server.use("/api", indexRouter)
server.use(controlador_descripcion_peticiones)
server.use(controlador_no_encontrado)
server.use(error_handler)



server.listen(PORT,ready)