import { modeloRepAlumnos } from "../models/alumno.model.js";

modeloRepAlumnos.create({
    name:"Vanesa",
    apepat:"Martinez", 
    apemat:"Hernandez",
    edad: 15
         
},
{name:"Daniel",
    apepat:"Lopez", 
    apemat:"Garcia",
    edad: 34

},
{
    name:"Jessica",
    apepat:"Romo", 
    apemat:"Montoya",
    edad: 24
},
{
    name:"Paola",
    apepat:"Lopez", 
    apemat:"Flores",
    edad: 28
},
{
    name:"Jorge",
    apepat:"Wong", 
    apemat:"Alba",
    edad: 51
}
)

export const test=()=>{
    console.log("Funciona el controlador")
}