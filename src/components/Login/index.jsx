import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'
import logoIcon from '../../assets/logo.png'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode fazer a validação do usuário e senha
    // Se estiver correto, pode navegar para outra página
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='login'>
      <div className="login-logo">
        <img src={logoIcon} alt="" />
      </div>

      <form className="login-form">
        <div>
          <label htmlFor="username">Usuário:</label>
          <input className='login-input' type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input className='login-input' type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div>
          <button className='login-btn' type="submit">Entrar</button>
          <button className='login-btn' type="button" onClick={handleCancel}>Cancelar</ button>
        </div>
      </form>
    </div>
  )
}

export default Login;
