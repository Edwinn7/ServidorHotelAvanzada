import express from 'express'
import { ControladorHabitacion} from '../Controllers/controladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion // usando el controlador
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva=new ControladorReserva
export let rutas=express.Router()

rutas.get('/hoteles/habitaciones',controladorHabitacion.buscarHabitaciones)

rutas.get('/hoteles/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)

rutas.post('/hoteles/habitacion',controladorHabitacion.registrarHabitacion)

rutas.put('/hoteles/habitacion',controladorHabitacion.editarHabitacion)


rutas.get('/hoteles/reservas',controladorReserva.buscarReservas)

rutas.get('/hoteles/reserva/:id',controladorReserva.buscarReservaPorId)

rutas.post('/hoteles/reserva',controladorReserva.registrarReserva)

rutas.put('/hoteles/reserva',controladorReserva.editarReserva)

rutas.delete('/hoteles/reserva',controladorReserva.eliminarReserva)