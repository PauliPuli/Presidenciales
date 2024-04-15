import express, { response } from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { crearCandidato, verCandidatos, editarCandidatos } from "../queries/consultas.js";


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

router.get("/candidatos", async(req,res)=>{
    const response=await verCandidatos()
    res.json(response)
})

router.put("/candidato",async(req,res)=>{
    const { nombre,foto,id }=req.body;
    const datos=[nombre,foto,id];
    console.log(datos)
    console.log(req.body)
   await editarCandidatos(datos);
   res.send('Candidato agregado')
})
export default router;