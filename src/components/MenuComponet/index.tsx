import { MenuContainer, MenuContent, Logo, LogoContainer } from './style'

export const MenuComponent = () => {
  return (
    <MenuContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContent>
        <ul>
          <li>
            <button>Pedidos</button>
          </li>
          <li>
            <button>Garçom</button>
          </li>
          <li>
            <button>Cardápio</button>
          </li>
          <li>
            <button>Configuração</button>
          </li>
          <li>
            <button>Robô</button>
          </li>
          <li>
            <button>Relatório</button>
          </li>
        </ul>
      </MenuContent>
    </MenuContainer>
  )
}
