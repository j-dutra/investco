import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import Register from './components/login/Register';
import Login from './components/login/Login';

function Home() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate ('/login')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <div>
      <h1>Tela Inicial</h1>
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleRegister}>Cadastrar-se</button>
    </div>


  )
}

const App = () => {
  const location = useLocation()

  return (
    <div>
      {location.pathname === '/' && <Home />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
