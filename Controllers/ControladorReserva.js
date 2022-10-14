import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorReserva{
    constructor(){}

    async buscarReservas(request,response){
        let objServicioReserva = new ServicioReserva()

        try{
            response.status(200).json({
                "mensaje":"Exito al buscar reserva",
                "datos":await objServicioReserva.buscarReserva(),
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al buscar reserva "+error,
                "datos":null,
                "estado":false
            })
        }
    }
    async buscarReservaPorId(request,response){
        let idRes=request.params.idReserva // recibe el id de la peticion
        let objServicioReserva= new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar reserva con id: "+idRes,
                "datos":await objServicioReserva.buscarReservaPorId(idRes)
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al buscar reserva por id "+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async registrarReserva(request,response){
        let datosReserva=request.body
        let objServicioReserva=new ServicioReserva()
        let objServicioHabitacion=new ServicioHabitacion()
        let datosHabitacion=request.body
        let idHabitacion = datosReserva.idHabitacion
        let NumeroPersonas=datosReserva.numeroNinos+datosReserva.numeroAdultos
        let dias = datosReserva.fechaSalida-datosReserva.fechaEntrada
        try{
            if(idHabitacion =!null){
                response.status(400).json({
                    "mensaje":"error id habitacion no exitente ",
                    "datos":null
                })
            }
            else{
                //await objServicioReserva.agregarReservaEnBD(datosReserva)
            response.status(200).json({
                "mensaje":"Exito al registrar reserva",
                "datos":null
            })
            }
// 2 
            if(NumeroPersonas>5){
                response.status(400).json({
                    "mensaje":"Error ha superado el numero maximo de personas para esta habitacion ",
                    "datos":null
                })
            }
            else{
                await objServicioReserva.agregarReservaEnBD(datosReserva)
                response.status(200).json({
                    "mensaje":"Exito al registrar reserva",
                    "datos":null
                })    
            }
// 3        

        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta "+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async editarReserva(request,response){
        let idRes=request.params.idReserva
        let datosReserva=request.body
        let objServicioReserva= new ServicioReserva()
        try{
            response.status(200).json({
                "mensaje":"Exito al editar reserva con id: "+idRes,
                "datos":await objServicioReserva.editarReserva(idRes,datosReserva)
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al editar reserva "+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async eliminarReserva(request,response){
        let idRes=request.params.idReserva
        let objServicioReserva= new ServicioReserva()
        try{
            response.status(200).json({
                "Mensaje":"Exito al eliminar reserva",
                "datos":await objServicioReserva.eliminarReserva(idRes)
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al eliminar reserva "+error,
                "datos":null,
                "estado":false
            })
        }
    }
    
}