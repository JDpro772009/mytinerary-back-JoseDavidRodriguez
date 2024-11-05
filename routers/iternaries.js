import { Router } from "express";
import { allIternaries,idIternary } from "../controladores/Itineraries/read.js";
import { iternaryCreated } from "../controladores/Itineraries/create.js";
import update from "../controladores/Itineraries/update.js";
import eliminar from "../controladores/Itineraries/deleted.js";



const router = Router()

router.get("/all", allIternaries)
router.get("/Id/:id", idIternary)
router.post("/crear", iternaryCreated)
router.put("/update",update.update)
router.delete("/eliminar",eliminar.destroy)




   export default router