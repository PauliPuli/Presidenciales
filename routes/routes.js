import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { crearCandidato } from "../queries/consultas.js";


router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
})

router.post("/candidato",async(req,res)=>{
    const {nombre,foto,color}=req.body;
    const datos=[nombre,foto,color];
    console.log(datos)
    console.log(req.body)
   await crearCandidato(datos);
   res.send('Candidato agregado')
})

router.get

export default router;