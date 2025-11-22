// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LoginLogo,
  LogoBaita,
  LoginBackground,
  LoginContainer,
  LoginInput,
  LoginButton
} from './style'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // impede o refresh da página

    if (email === 'garcom@baita.com' && password === '1234') {
      navigate('/garcomPage')
    } else if (email === 'admin@baita.com' && password === 'admin') {
      navigate('/admPage')
    } else {
      alert('Usuário ou senha incorretos!')
    }
  }

  return (
    <LoginBackground>
      <LoginContainer>
        <LoginLogo>
          <LogoBaita />
        </LoginLogo>

        <h1>Bem-vindo ao BaitaKão</h1>

        {/* importante: usar onSubmit e o botão type="submit" */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <LoginInput
            id="email"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha:</label>
          <LoginInput
            id="senha"
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton type="submit">Entrar</LoginButton>
          <a href="#">Forgot password?</a>
        </form>
      </LoginContainer>
    </LoginBackground>
  )
}

export default Login
