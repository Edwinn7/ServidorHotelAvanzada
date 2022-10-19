import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaReserva=new Schema({
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:false,
        type:Number
    }
})

export const modeloReserva=mongoose.model('Reservas',EsquemaReserva)