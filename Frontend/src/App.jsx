import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Register from './Register.jsx';
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';
import Prueba from './Prueba.jsx';

import {AuthPro, useAuth } from "./context/AuthContext";

function App() {
  return (
      <div>
        <AuthPro>
          <BrowserRouter>
          <Navbar></Navbar>
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
