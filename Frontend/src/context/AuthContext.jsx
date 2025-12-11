import {createContext, useContext}from 'react';
import { useState } from 'react';

//crear contexto
const AuthContext = createContext();

//children va a ser todo lo que este dentro del Auth
export const AuthPro = ({children})=>{

    const [token, setToken] = useState(null);
    const [nombre, setNombre] = useState("");

    const guardarToken=(tk /*recibir token login*/)=>{
        setToken(tk)
    }

    const guardarNombre=(name)=>{
        setNombre(name)
    }

    return(
        <AuthContext.Provider value={{token,guardarToken, nombre, guardarNombre}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}
