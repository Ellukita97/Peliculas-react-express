import { Router } from "express";
import { getGeneroPelicula, postGeneroPelicula, deleteGeneroPelicula, updateGeneroPelicula } from "../Controllers/generoPelicula.Controller.js";

const routerGeneroPelicula = Router()

routerGeneroPelicula.get("/generoPelicula", getGeneroPelicula)
routerGeneroPelicula.post("/generoPelicula", postGeneroPelicula)
routerGeneroPelicula.put("/generoPelicula/:id", updateGeneroPelicula)
routerGeneroPelicula.delete("/generoPelicula/:id", deleteGeneroPelicula)

export default routerGeneroPelicula