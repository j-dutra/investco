import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div className='login-form'>
        <h1>Tela de Login</h1> 

        <form className='form-login' onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Usuário:</label>
            <input className='login-form-input' type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input className='login-form-input' type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          
          <button type="submit">Entrar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;


/*

return (
  <div className='login'>
    <div className='login-form'>
      <h1>Tela de Login</h1> 

      <form className='form-login' onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input className='login-form-input' type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input className='login-form-input' type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        
        <button type="submit">Entrar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  </div>
);
}

*/
