import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'
import Logo from '../Logo';

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
      <Logo />
      <h1>"Invista no seu futuro com confiança!</h1>

      <form className='home-form'>
        <button className='home-btn' onClick={handleLoginClick}>Entrar</button>
        <button className='home-btn' onClick={handleRegisterClick}>Cadastre-se</button>
      </form>
    </div>
  );
}

export default Home;

