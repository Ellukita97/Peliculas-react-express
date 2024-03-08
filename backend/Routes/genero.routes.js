import { Router } from "express";
import { getGeneros, postGeneros, deleteGenero, updateGenero } from "../Controllers/genero.Controller.js";

const routerGenero = Router()

routerGenero.get("/genero", getGeneros)
routerGenero.post("/genero", postGeneros)
routerGenero.delete("/genero/:id", deleteGenero)
routerGenero.put("/genero/:id", updateGenero)

export default routerGenero