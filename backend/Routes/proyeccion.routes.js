import { Router } from "express";
import { getProyecciones, postProyecciones, deleteProyecciones, updateProyecciones } from "../Controllers/proyeccion.Controller.js";

const routerProyeccion = Router()

routerProyeccion.get("/proyeccion", getProyecciones)
routerProyeccion.post("/proyeccion", postProyecciones)
routerProyeccion.put("/proyeccion/:id", updateProyecciones)
routerProyeccion.delete("/proyeccion/:id", deleteProyecciones)

export default routerProyeccion
