import { Router } from "express";

import citiesRouter from "./cities.js"
import iternariesRouter from "./iternaries.js"
import usuarioRouter from "./usuarios.js"
import auth from "./auth.js"
const router = Router()


router.use("/cities", citiesRouter)
router.use("/iternaries", iternariesRouter)
router.use("/usuarios", usuarioRouter)
router.use("/auth", auth)

export default router