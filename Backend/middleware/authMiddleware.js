const jwt = require("jsonwebtoken")

const AuthMiddleware = {

    verificarToken(req, res, next){
    const header = req.headers.authorization

    if (!header){
        return res.json({ error: "Token no generado"})
    }
    const token = header.split(" ")[1] //Bearer token

    const respuesta =  jwt.verify(token, "JWT_SECRET")
        req.user = respuesta //Guarda los datos del usuario
        next() //si falla un endpoint pasa al siguiente  
    }

}




module.exports = AuthMiddleware