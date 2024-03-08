import { Router } from "express";
import { getProyeccionSala, postProyeccionSala, deleteProyeccionSala, updateProyeccionSala } from "../Controllers/proyeccionSala.Controller.js";

const routerProyeccionSala = Router()

routerProyeccionSala.get("/proyeccionSala", getProyeccionSala)
routerProyeccionSala.post("/proyeccionSala", postProyeccionSala)
routerProyeccionSala.put("/proyeccionSala/:id", updateProyeccionSala)
routerProyeccionSala.delete("/proyeccionSala/:id", deleteProyeccionSala)

export default routerProyeccionSala
