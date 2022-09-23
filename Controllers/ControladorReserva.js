export class ControladorReserva{
    constructor(){}

    buscarReservas(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar reserva",
                "datos":"AQUI VAN DATOS DE RESERVA",
                "estado":true
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
    buscarReservaPorId(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar reserva por id",
                "datos":"AQUI VAN DATOS DE RESERVA",
                "estado":true
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

    registrarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al registrar reserva",
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

    editarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al editar reserva",
                "datos":null,
                "estado":true
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

    eliminarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito al eliminar reserva",
                "datos":null,
                "estado":true
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