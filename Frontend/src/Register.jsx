import { useState } from "react";

function Register(){

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    
    async function guardar(e){
        e.preventDefault();

        const respuesta = await fetch('http://localhost:4000/api/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, email, password})
        })
        const data = await respuesta.json();
        alert("si");

    }

    return(
        <div>
            <form onSubmit={guardar}>
                <h1>Registro de Usuario</h1>
                <input type="text" placeholder="nombre"  onChange={(event)=>setNombre(event.target.value)} required/>
                <input type="email" placeholder="email"  onChange={(event)=>setEmail(event.target.value)} required/>
                <input type="password" placeholder="password"  onChange={(event)=>setPassword(event.target.value)} required/>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register