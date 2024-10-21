import { Router } from "express";
import {allCities,idCity} from "../controladores/Cities/read.js";
import {cityCreated} from "../controladores/Cities/create.js";



const router = Router()

router.get("/all", allCities)
router.get("/Id/:id", idCity)
router.post("/crear", cityCreated)




   export default router