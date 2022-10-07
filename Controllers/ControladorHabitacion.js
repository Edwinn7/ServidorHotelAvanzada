import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

    async buscarHabitaciones(request,response){
        let objServicioHabitacion = new ServicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objServicioHabitacion.buscarHabitaciones(),
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta "+error,
                "datos":null,
                "estado":false
            })
        }
    }
    async buscarHabitacionPorId(request,response){
        let id=request.params.idHabitacion // recibe el id de la peticion
        let objServicioHabitacion=new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar habitacion con id: "+id,
                "datos":await objServicioHabitacion.buscarHabitacionPorId(id)
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al buscar habitacion por id "+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async registrarHabitacion(request,response){
        let datosHabitacion=request.body
        let objServicioHabitacion=new ServicioHabitacion()
        try{
            await objServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
            response.status(200).json({
                "mensaje":"Exito al registrar habitacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta "+error,
                "datos":null
            })
        }
    }

    async editarHabitacion(request,response){
        let id=request.params.idHabitacion
        let datosHabitacion=request.body
        let objServicioHabitacion = new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito al editar habitacion con id: "+id,
                "datos":await objServicioHabitacion.editarHabitacion(id,datosHabitacion)
            })    
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Error al editar "+error,
                "datos":null,
                "estado":false
            })
        }
    }
}