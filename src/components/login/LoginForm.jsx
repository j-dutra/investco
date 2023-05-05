import logo from '../../assets/logo.png'

const LoginForm = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" />
      <h1>"Invista no seu futuro com confiança!"</h1>

      <form>
        <div className='inputs'>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='senha' />
          <button>Entrar</button>          
        </div>
      </form>
    </div>
  )
}

export default LoginForm
