import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Tela de Registro</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Registrar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default Register;
