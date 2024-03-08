import { Router } from "express";
import { getPeliculas, postPeliculas, updatePeliculas, deletePeliculas } from "../Controllers/pelicula.Controller.js";


const routerPelicula = Router()

routerPelicula.get("/pelicula", getPeliculas)
routerPelicula.post("/pelicula", postPeliculas)
routerPelicula.put("/pelicula/:id", updatePeliculas)
routerPelicula.delete("/pelicula/:id", deletePeliculas)

export default routerPelicula