import express from 'express'
import{rutas} from '../Routes/rutas.js'
import { conectarConMongo } from '../DataBase/conexion.js'

export class ServidorAPI{
    constructor(){
        this.app = express()
        this.conectarConBd()
        this.activarBody()
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

    conectarConBd(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(express.json())
    }
}