import { Router } from "express";
import { usuarioCreated } from "../controladores/Usuarios/create.js";
import validator from "../middlewares/validator.js";
import schema_user from "../schemas/user/created.js";
import accountExist from "../middlewares/accountExist.js"
import createHash from "../middlewares/createHash.js";
import { emailUsuario } from "../controladores/Usuarios/read.js";

const router = Router()

router.post("/crear",validator(schema_user),accountExist,createHash,usuarioCreated)
router.get("/:email",emailUsuario)

   export default router