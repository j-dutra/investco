import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'
import './style.css'

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className='home'>
      <img className='home-logo' src={logo} alt="" />
      <h1>"Invista no seu futuro com confiança!</h1>

      <form className='home-form'>
        <button className='home-btn' onClick={handleLoginClick}>Entrar</button>
        <button className='home-btn' onClick={handleRegisterClick}>Cadastre-se</button>
      </form>
    </div>
  );
}

export default Home;

