import './login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" />
      <h1>"Invista no seu futuro com confiança!"</h1>

      <form>
        <h3>Bem vindo!</h3>
        <div className="buttons">
          <button>clique para Entrar</button>
          <p>ou</p>
          <button>Cadastre-se</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login