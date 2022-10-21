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
        let objServicioHabitacion = new ServicioHabitacion()
        let datosReserva = request.body
        let datosHabitacion = request.body
        let idHabitacion = datosHabitacion.idHabitacion
        let numeroMaximoPersonas = datosHabitacion.numeroMaximoPersonas
        let NumeroPersonas = parseFloat(datosReserva.numeroNinos) + parseFloat(datosReserva.numeroAdultos)
        let habitacion
        let fechaEntrada = new Date(datosReserva.fechaEntrada).getTime()
        let fechaSalida = new Date(datosReserva.fechaSalida).getTime()
        let dias = (fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24)
        let costo
        let reserva
        try {
            habitacion = await objServicioHabitacion.buscarHabitacionPorId(idHabitacion)
            if (idHabitacion = ! null) {
                if (NumeroPersonas <= habitacion.numeroMaximoPersonas) {
                    if (dias >= 0) {
                        if (fechaEntrada < fechaSalida) {
                            costo = dias * habitacion.valorNoche
                            console.log("costo de reserva " + costo)
                            datosReserva.costoReserva = costo
                        }
                        else {
                            response.status(400).json({
                                "mensaje": "Fecha de entrada es mayor a la fecha de salida",
                                "datos": null
                            })

                        }
                    }
                    else {
                        response.status(400).json({
                            "mensaje": "Error no estas en el hotel",
                            "datos": null
                        })
                    }
                }
                else {
                    response.status(400).json({
                        "mensaje": "Error ha superado el numero maximo de personas para esta habitacion",
                        "datos": null
                    })
                }
            }
            else {
                response.status(400).json({
                    "mensaje": "error id habitacion no exitente ",
                    "datos": null
                })

            }

            response.status(200).json({
                "mensaje": "Exito al registrar reserva",
                "datos": null
            })

            //2

            console.log("------------------------------")
            console.log("habitacion " + habitacion)
            console.log("id " + idHabitacion)
            console.log("Personas " + NumeroPersonas)
            // console.log("Costo reserva " + costo)
            // console.log("Numero maximo de personas " + numeroMaximoPersonas)
            console.log("Dias totales " + dias)
            console.log("------------------------------")
            await objServicioReserva.agregarReservaEnBD(datosReserva)


        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta " + error,
                "datos": null
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