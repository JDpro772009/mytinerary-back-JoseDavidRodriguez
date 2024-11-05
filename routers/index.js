import { Router } from "express";

import citiesRouter from "./cities.js"
import iternariesRouter from "./iternaries.js"
const router = Router()


router.use("/cities", citiesRouter)
router.use("/iternaries", iternariesRouter)

export default router