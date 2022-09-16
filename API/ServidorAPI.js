import express from 'express'
import{rutas} from '../Routes/rutas.js'
export class ServidorAPI{
    constructor(){
        this.app = express() 
        this.atenderPeticiones()
    }
    // Metodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Encendiendo el servidor "+ process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutas)
    }

    conectarConBd(){}
}