const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require("bcryptjs")

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

    login(){

    },

    logout(){

    }

}

module.exports = authService