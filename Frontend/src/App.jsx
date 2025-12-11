import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Register from './Register.jsx';
import Login from './Login.jsx';
import Prueba from './Prueba.jsx';

import {AuthPro, useAuth } from "./context/AuthContext";
import Navegacion from './Navbar.jsx';

function App() {
  return (
      <div>
        <AuthPro>
          <BrowserRouter>
          <Navegacion></Navegacion>
          <Routes>
            <Route path='/' element={<Register></Register>} />
            <Route path='/login' element={ <Login></Login>} />
            <Route path='/prueba' element={ <Prueba></Prueba>} />
          </Routes>
          </BrowserRouter>
        </AuthPro>
      </div>
  )
}

export default App

//componente interno

function RequireAuth({children}) {
  const {token} = useAuth();
  
  if(!token){
    return <Navigate to="/login"></Navigate>
  }
  else{
  return children;
  }
}
