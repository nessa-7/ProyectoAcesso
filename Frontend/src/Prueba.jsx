import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

function Prueba() {

    const {token} = useAuth();
    
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
            <h1>Componente de Prueba</h1>
        </div>
    )
}

export default Prueba;