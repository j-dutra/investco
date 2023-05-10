import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import './index.css'

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Home />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
