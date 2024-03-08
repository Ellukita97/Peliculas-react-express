import { Router } from "express";
import { getBoletoCompra,postBoletoCompra,deleteBoletoCompra,updateBoletoCompra } from "../Controllers/boletoCompra.Controller.js";

const routerBoletoCompra = Router()

routerBoletoCompra.get("/boletoCompra", getBoletoCompra)
routerBoletoCompra.post("/boletoCompra", postBoletoCompra)
routerBoletoCompra.put("/boletoCompra/:id", updateBoletoCompra)
routerBoletoCompra.delete("/boletoCompra/:id", deleteBoletoCompra)

export default routerBoletoCompra