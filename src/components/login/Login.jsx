import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'

const Login = () => {
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
      <img src={logo} alt="" />
      <h1>"Invista no seu futuro com confiança!"</h1>

      <form>
        <div className='inputs'>
          <div>
            <label htmlFor="username">Usuário</label>
            <input type="text" id='username' value={username} onChange={handleUsernameChange} />
          </div>

          <div> 
            <label htmlFor="password" id='password' value={password} onChange={handlePasswordChange}></label>
          </div>

          <button type='submit'>Entrar</button> 
          <button type='button' onClick={handleCancel}>Cancelar</button>         
        </div>
      </form>
    </div>
  )
}

export default Login
