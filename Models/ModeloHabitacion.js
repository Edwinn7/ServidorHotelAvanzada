import mongoose from 'mongoose';

//Esquema de datos es un estandar donde solo aparecen los datos con los que el API  va a trabajar
const Schema = mongoose.Schema;


const EsquemaHabitacion = new Schema({
    nombre:{
        required:true,
        type:String
    },
    valorNoche:{
        required:true,
        type:Number
    },
    descripcion:{
        required:true,
        type:String
    },
    fotografias:{
        required:true,
        type:[String]
    },
    numeroMaximoPersonas:{
        required:true,
        type:Number
    }
});

export const modeloHabitacion=mongoose.model('Habitaciones',EsquemaHabitacion)