const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const verificarToken = require("../middleware/authMiddleware")

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/prueba', authController.prueba)

router.get('/perfil', verificarToken, async (req , res) => {
    res.json({
        mensaje: "Acceso Permitido",
        usuario: req.user
    })
})

module.exports = router