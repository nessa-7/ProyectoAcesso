const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const verificarToken = require("../middleware/authMiddleware")
const AuthMiddleware = require("../middleware/authMiddleware")

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/prueba', AuthMiddleware.verificarToken, authController.prueba)


module.exports = router