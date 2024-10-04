import { Schema, model } from "mongoose"


const EsqumaRepAlumnos = new Schema ({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    edad:{
        type:Number
    }
})

export const modeloRepAlumnos = new model("Alumnos Reprobasos", EsqumaRepAlumnos)