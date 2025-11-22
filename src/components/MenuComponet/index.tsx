import { useNavigate } from 'react-router-dom'
import { MenuContainer, MenuContent, Logo, LogoContainer } from './style'

export const MenuComponent = () => {
  const navigate = useNavigate()

  return (
    <MenuContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContent>
        <ul>
          <li>
            <button onClick={() => navigate('/adm/pedidos')}>Pedidos</button>
          </li>
          <li>
            <button onClick={() => navigate('/adm/garcom')}>Garçom</button>
          </li>
          <li>
            <button onClick={() => navigate('/adm/cardapio')}>Cardápio</button>
          </li>
          <li>
            <button onClick={() => navigate('/adm/config')}>
              Configuração
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/adm/robo')}>Robô</button>
          </li>
          <li>
            <button onClick={() => navigate('/adm/relatorio')}>
              Relatório
            </button>
          </li>
        </ul>
      </MenuContent>
    </MenuContainer>
  )
}
