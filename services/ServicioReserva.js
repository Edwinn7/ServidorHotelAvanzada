import {modeloReserva} from "../Models/ModeloReserva.js"

export class ServicioReserva{
    async buscarReserva(){
        let reservas= await modeloReserva.find()
        return reservas
    }

    async buscarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }

    async agregarReservaEnBD(datos){
        let datosValidados=new modeloReserva(datos)
        return await datosValidados.save()
    }

    async editarReserva(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    
    async eliminarReserva(id,datos){
        return await modeloReserva.findByIdAndDelete(id,datos)
    }
}