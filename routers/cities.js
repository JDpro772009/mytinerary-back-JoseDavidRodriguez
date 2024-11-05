import { Router } from "express";
import {allCities,idCity,iternaryCity} from "../controladores/Cities/read.js";
import {cityCreated} from "../controladores/Cities/create.js";
import update from "../controladores/Cities/update.js";
import eliminar from "../controladores/Cities/deleted.js";



const router = Router()

router.get("/all", allCities)
router.get("/Id/:id", idCity)
router.get("/Id/:idCiudad/itineraries", iternaryCity)
router.post("/crear", cityCreated)
router.put("/update",update.update)
router.delete("/eliminar",eliminar.destroy)




   export default router