import { Router } from "express";
import { getUsuarios, postUsuarios, updateUsuarios, deleteUsuarios } from "../Controllers/usuario.Controller.js";

const routerUsuario = Router()

routerUsuario.get('/usuario',getUsuarios)
routerUsuario.post('/usuario',postUsuarios)
routerUsuario.put('/usuario/:id',updateUsuarios)
routerUsuario.delete('/usuario/:id',deleteUsuarios)

export default routerUsuario