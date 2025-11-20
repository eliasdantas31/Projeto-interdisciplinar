import { useNavigate } from 'react-router-dom'
import { HeaderContainer, Logo, HeaderContent, LogoContainer } from './style'

export const Header = () => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id

    if (target === 'pedidos') {
      navigate('../pages/')
    } else if (target === 'garcom') {
      navigate('../pages')
    } else if (target === 'cardapio') {
      navigate('../pages/cardapioADM')
    } else if (target === 'config') {
      navigate('../pages/')
    } else if (target === 'robo') {
      navigate('../pages/')
    } else if (target === 'relatorio') {
      navigate('../pages/')
    }
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HeaderContent>
        <li>
          <button id="pedidos" onClick={handleClick}>
            Pedidos
          </button>
        </li>
        <li>
          <button id="garcom" onClick={handleClick}>
            Garçom
          </button>
        </li>
        <li>
          <button id="cardapio" onClick={handleClick}>
            Cardápio
          </button>
        </li>
        <li>
          <button id="config" onClick={handleClick}>
            Configuração
          </button>
        </li>
        <li>
          <button id="robo" onClick={handleClick}>
            Robô
          </button>
        </li>
        <li>
          <button id="relatorio" onClick={handleClick}>
            Relatório
          </button>
        </li>
      </HeaderContent>
    </HeaderContainer>
  )
}
