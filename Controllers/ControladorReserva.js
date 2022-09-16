export class ControladorReserva{
    constructor(){}

    buscarReservas(request,response){
        response.send("Buscando reserva desde el controlador")
    }
    buscarReservaPorId(request,response){
        response.send("Buscando una reserva desde el controlador por id")
    }

    registrarReserva(request,response){
        response.send("Registrando reserva desde el controlador")
    }

    editarReserva(request,response){
        response.send("Editando reserva desde el controlador")
    }

    eliminarReserva(request,response){
        response.send("Eliminando reserva desde el controlador")
    }
    
}