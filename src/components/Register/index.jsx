import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css'
import logoIcon from '../../assets/logo.png'

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o registro do usuário com os dados fornecidos
    // Depois pode navegar para outra página
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='register'>
      <div className="register-logo">
        <img src={logoIcon} alt="" />
      </div>

      <form className='register-form' onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input className='register-input' type="text" id="name" value={name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input className='register-input' type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input className='register-input' type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div>
          <button className='register-btn' type="submit">Registrar</button>
          <button className='register-btn' type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
