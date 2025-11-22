import { useNavigate } from 'react-router-dom'
import * as H from './style'

type HeaderProps = {
  $variant?: 'adm' | 'garcom'
}

export const Header = ({ $variant = 'adm' }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <H.HeaderContainer>
      <H.LogoContainer>
        <H.Logo />
      </H.LogoContainer>
      <H.HeaderContent $variant={$variant}>
        <li className="adm">
          <button id="pedidos" onClick={() => navigate('/adm/pedidos')}>
            Pedidos
          </button>
        </li>
        <li className="adm">
          <button id="garcom" onClick={() => navigate('/adm/garcom')}>
            Garçom
          </button>
        </li>
        <li className="adm">
          <button id="cardapio" onClick={() => navigate('/adm/cardapio')}>
            Cardápio
          </button>
        </li>
        <li className="adm">
          <button id="config" onClick={() => navigate('/adm/config')}>
            Configuração
          </button>
        </li>
        <li className="adm">
          <button id="robo" onClick={() => navigate('/adm/robo')}>
            Robô
          </button>
        </li>
        <li className="adm">
          <button id="relatorio" onClick={() => navigate('/adm/relatorio')}>
            Relatório
          </button>
        </li>
        <li className="garcom">
          <button id="sair" onClick={() => navigate('/')}>
            Sair
          </button>
        </li>
      </H.HeaderContent>
    </H.HeaderContainer>
  )
}
