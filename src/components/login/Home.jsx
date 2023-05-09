import { useNavigate } from 'react-router-dom'

import './login.css'
import logo from '../../assets/logo.png'

const Home = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate ('/login')
  }

  const handleRegisterClick = () => {
    navigate ('./register')
  }
  return (
    <div className='login'>
      <img src={logo} alt="" />
      <h1>"Invista no seu futuro com confiança!"</h1>

      <form>
        <h3>Tela Inicial</h3>
        <div className="buttons">
          <button onClick={handleLoginClick}>Entrar</button>
          <button onClick={handleRegister}>Cadastre-se</button>
        </div>
        
      </form>
    </div>
  )
}

export default Home