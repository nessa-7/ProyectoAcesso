const authService = require('../services/authService')

const authController = {
    async register(req,res){
        const usernuevo = await authService.register(req.body)
        res.json({mensaje:"Registro realizado", usernuevo})
    },

    async login(req, res){
        const result = await authService.login(req.body)
        if(!result){
            return res.json({mensaje: "Credenciales incorrectas"})
        }
        else{
            res.json({
                mensaje: "Login exitoso",
                token: result.token,
                usuario: result.usuario
            })
        }
    }
}

module.exports = authController