import express from "express";
import routerGenero from "./Routes/genero.routes.js";
import routerPelicula from "./Routes/pelicula.routes.js";
import cors from 'cors'
import routerUsuario from "./Routes/usuario.routes.js";
import routerProyeccion from "./Routes/proyeccion.routes.js";
import routerSala from "./Routes/sala.routes.js";
import routerGeneroPelicula from "./Routes/generoPelicula.routes.js";
import routerProyeccionSala from "./Routes/proyeccionSala.routes.js";
import routerBoletoCompra from "./Routes/boletoCompra.routes.js";

let SERVER_PORT = 3000

const app = express()

app.use(cors())
app.use(express.json());

app.use(routerPelicula)
app.use(routerGenero)
app.use(routerUsuario)
app.use(routerProyeccion)
app.use(routerSala)
app.use(routerGeneroPelicula)
app.use(routerProyeccionSala)
app.use(routerBoletoCompra)

app.listen(SERVER_PORT)
console.log("app corriendo en el puerto " + SERVER_PORT)

