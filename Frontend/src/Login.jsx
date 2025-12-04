import { useState } from "react";

function Login(){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');  
        
        async function guardar(e){
            e.preventDefault();
    
            const respuesta = await fetch('http://localhost:4000/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password})
            })
            const data = await respuesta.json();
    
            alert("si");
        }
    
        return(
            <div>
                <form onSubmit={guardar}>
                    <h1>Login de Usuario</h1>
                    <input type="email" placeholder="email"  onChange={(event)=>setEmail(event.target.value)} required/>
                    <input type="password" placeholder="password"  onChange={(event)=>setPassword(event.target.value)} required/>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        )
}

export default Login;