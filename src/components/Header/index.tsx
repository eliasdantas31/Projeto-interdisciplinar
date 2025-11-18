import { HeaderContainer, Logo, HeaderContent, LogoContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeaderContent>
        <li>
          <a href="#config">Configuração</a>
        </li>
        <li>
          <a href="#cardapio">Cardápio</a>
        </li>
        <li>
          <a href="#pedido">Pedidos</a>
        </li>
        <li>
          <a href="#garçom">Garçom</a>
        </li>
        <li>
          <a href="#robo">Robô</a>
        </li>
        <li>
          <a href="#relatorio">Relatório</a>
        </li>
      </HeaderContent>
    </HeaderContainer>
  )
}
