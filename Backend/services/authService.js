const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const authService = {

    async register(data){
        const {nombre,email,password}=data

        //encriptar password
        const datoencriptado = await bcrypt.hash(password,10)
        const usuario = await prisma.usuario.create({data:
            {nombre,email,password:datoencriptado}
        })

        return usuario
    },

    
    async login(data){
        const {email, password} = data
        const usuario = await prisma.usuario.findUnique({ where: { email }})
        if (!usuario){
            return null
        }
        else{
            const valido = await bcrypt.compare(password, usuario.password)
            if (!valido){
                return null
            }
            const token = jwt.sign(
                { id: usuario.id, email: usuario.email },
                "JWT_SECRET",
                { expiresIn: "2h"}
            )
            return {usuario, token}
        }
    },

    logout(){

    }

}

module.exports = authService

/*

async login(data){
        const {email, password} = data
        const usuario = await prisma.usuario.findUnique({ where: { email }})
        
            const valido = await bcrypt.compare(password, usuario.password)
            if (!valido){
                return {mensaje: "Credenciales incorrectas"}
            }
            else{
            const token = jwt.sign(
                { 
                    id: usuario.id, 
                    email: usuario.email 
                },
                "JWT_SECRET",
                { 
                    expiresIn: "1d "
                }
            )
            return {usuario, token}
        }

        */