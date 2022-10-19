import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorReserva {
    constructor() { }

    async buscarReservas(request, response) {
        let objServicioReserva = new ServicioReserva()

        try {
            response.status(200).json({
                "mensaje": "Exito al buscar reserva",
                "datos": await objServicioReserva.buscarReserva(),
            })
        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error al buscar reserva " + error,
                "datos": null,
                "estado": false
            })
        }
    }
    async buscarReservaPorId(request, response) {
        let idRes = request.params.idReserva // recibe el id de la peticion
        let objServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "mensaje": "Exito al buscar reserva con id: " + idRes,
                "datos": await objServicioReserva.buscarReservaPorId(idRes)
            })
        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error al buscar reserva por id " + error,
                "datos": null,
                "estado": false
            })
        }
    }

    async registrarReserva(request, response) {
        let objServicioReserva = new ServicioReserva()
        let datosReserva = request.body
        // hbtacion
        let objServicioHabitacion = new ServicioHabitacion()
        let datosHabitacion = request.body
        // --------------------------------------------------------
        let id = datosReserva.idHabitacion
        let numeroMaximoPersonas = parseFloat(datosHabitacion.numeroMaximoPersonas)
        let NumeroPersonas = parseFloat(datosReserva.numeroNinos) + parseFloat(datosReserva.numeroAdultos)
        let fechaEntrada = new Date(datosReserva.fechaEntrada).getTime()
        let fechaSalida = new Date(datosReserva.fechaSalida).getTime()
        let dias = (fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24)
        let costo = parseFloat(datosReserva.costoReserva) * parseFloat(datosHabitacion.valorNoche)
        try {
            /*
            if (id =! ) {
                response.status(400).json({
                    "mensaje": "error id habitacion no exitente ",
                    "datos": null
                })
            }
            else {
                //await objServicioReserva.agregarReservaEnBD(datosReserva)
                response.status(200).json({
                    "mensaje": "Exito al registrar reserva",
                    "datos": null
                })
            }
            */
//2
            console.log("------------------------------")
            console.log("Costo reserva " + costo)
            console.log("Numero maximo de personas "+numeroMaximoPersonas)
            console.log("Personas " + NumeroPersonas)
            console.log("id " + id)
            console.log("Dias totales " + dias)
            // console.log("Dias totales "+dias/(1000*60*60*24))
            if (NumeroPersonas > 6) {
                response.status(400).json({
                    "mensaje": "Error ha superado el numero maximo de personas para esta habitacion ",
                    "datos": null
                })

            }
            else {
                // await objServicioReserva.agregarReservaEnBD(datosReserva)
                response.status(200).json({
                    "mensaje": "Exito al registrar reserva",
                    "datos": null
                })
            }
// 3        

        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta " + error,
                "datos": null,
                "estado": false
            })
        }
    }

    async editarReserva(request, response) {
        let idRes = request.params.idReserva
        let datosReserva = request.body
        let objServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "mensaje": "Exito al editar reserva con id: " + idRes,
                "datos": await objServicioReserva.editarReserva(idRes, datosReserva)
            })
        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error al editar reserva " + error,
                "datos": null,
                "estado": false
            })
        }
    }

    async eliminarReserva(request, response) {
        let idRes = request.params.idReserva
        let objServicioReserva = new ServicioReserva()
        try {
            response.status(200).json({
                "Mensaje": "Exito al eliminar reserva",
                "datos": await objServicioReserva.eliminarReserva(idRes)
            })
        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error al eliminar reserva " + error,
                "datos": null,
                "estado": false
            })
        }
    }

}