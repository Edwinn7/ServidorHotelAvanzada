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
        let idRes=request.params.idReserva // recibe el id de la peticion
        try{
            response.status(200).json({
                "mensaje":"Exito al buscar reserva con id: "+idRes,
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
        let datosReserva=request.body
        try{
            response.status(200).json({
                "mensaje":"Exito al registrar reserva",
                "datos":datosReserva,
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
        let id=request.params.idReserva
        let datosReserva=request.body
        console.log(id,datosReserva)
        try{
            response.status(200).json({
                "mensaje":"Exito al editar reserva: "+id,
                "datos":datosReserva,
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
        let idRes=request.params.idReserva
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