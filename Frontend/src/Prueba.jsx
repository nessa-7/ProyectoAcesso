import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

function Prueba() {

    const {token} = useAuth();
    const {nombre} = useAuth();

    useEffect(() => {
        traer()
    }, [])

    async function traer(){
        const respuesta = await fetch('http://localhost:4000/api/prueba',{
            method: 'GET',
            headers:{
                Authorization: "bearer" + token
            }
        })
        const res = await respuesta.json();
        console.log(res);
    }
    return (
        <div>
            <h1>Prueba</h1>
            <h2>El usuario es: {nombre}</h2>
        </div>
    )
}

export default Prueba;