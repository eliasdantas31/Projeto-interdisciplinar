import {
  LoginLogo,
  LogoBaita,
  LoginBackground,
  LoginContainer,
  LoginInput,
  LoginButton
} from './style'

const Login = () => {
  return (
    <LoginBackground>
      <LoginContainer>
        <LoginLogo>
          <LogoBaita />
        </LoginLogo>
        <h1>Bem-vindo ao BaitaKão</h1>
        <form action="">
          <label htmlFor="">E-mail:</label>
          <LoginInput type="text" placeholder="Seu email" />
          <label htmlFor="">Senha:</label>
          <LoginInput type="password" placeholder="Sua senha" />
          <LoginButton type="submit">Entrar</LoginButton>
          <a href="#">Forgot password?</a>
        </form>
      </LoginContainer>
    </LoginBackground>
  )
}

export default Login
