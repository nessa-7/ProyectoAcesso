const authService = require('../services/authService')

const authController = {
    async register(req,res){
        const usernuevo = await authService.register(req.body)
        res.json({mensaje:"Registro realizado", usernuevo})
    }
}

module.exports = authController