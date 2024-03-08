import { Router } from "express";
import { getSalas, postSalas, deleteSalas, updateSalas } from "../Controllers/sala.Controller.js";

const routerSala = Router()

routerSala.get("/sala", getSalas)
routerSala.post("/sala", postSalas)
routerSala.put("/sala/:id", updateSalas)
routerSala.delete("/sala/:id", deleteSalas)

export default routerSala