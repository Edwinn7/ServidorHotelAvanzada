export class ControladorHabitacion{
    constructor(){}

    buscarHabitaciones(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":"AQUI VAN DATOS DE HABITACIONES",
                "estado":true
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
    buscarHabitacionPorId(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar habitacion por id",
                "datos":"AQUI VAN DATOS DE HABITACIONES",
                "estado":true
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

    registrarHabitacion(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al registrar habitacion",
                "datos":null,
                "estado":true
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

    editarHabitacion(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al editar",
                "datos":null,
                "estado":true
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