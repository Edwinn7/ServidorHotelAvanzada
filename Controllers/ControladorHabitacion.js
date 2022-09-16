export class ControladorHabitacion{
    constructor(){}

    buscarHabitaciones(request,response){
        response.send("Buscando habitaciones desde el controlador")
    }
    buscarHabitacionPorId(request,response){
        response.send("Buscando una habitacion desde el controlador")
    }

    registrarHabitacion(request,response){
        response.send("Registrando habitacion desde el controlador")
    }

    editarHabitacion(request,response){
        response.send("Editando habitacion desde el controlador")
    }
}