import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Register from './Register.jsx';
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
      <div>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Register></Register>} />
            <Route path='/login' element={ <Login></Login>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
