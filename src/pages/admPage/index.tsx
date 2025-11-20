import { Container, OptionsContainer, OptionCard } from './style'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const AdmPage = () => {
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.id

    if (target === 'pedidos') {
      navigate('../')
    } else if (target === 'garcom') {
      navigate('../')
    } else if (target === 'cardapio') {
      navigate('../cardapioADM')
    } else if (target === 'config') {
      navigate('../')
    } else if (target === 'robo') {
      navigate('../')
    } else if (target === 'relatorio') {
      navigate('../')
    }
  }

  return (
    <Container>
      <Header />
      <OptionsContainer>
        <OptionCard id="pedidos" $bgColor="red" onClick={handleClick}>
          <h1>PEDIDOS</h1>
        </OptionCard>
        <OptionCard id="garcom" $bgColor="yellow" onClick={handleClick}>
          <h1>GARÇOM</h1>
        </OptionCard>
        <OptionCard
          id="cardapio"
          $largura="1339px"
          $bgColor="yellow"
          onClick={handleClick}
        >
          <h1>CARDÁPIO</h1>
        </OptionCard>
        <OptionCard
          id="config"
          $largura="345px"
          $bgColor="red"
          onClick={handleClick}
        >
          <i className="bi bi-gear"></i>
        </OptionCard>
        <OptionCard id="robo" $bgColor="yellow" onClick={handleClick}>
          <h1>ROBÔ</h1>
        </OptionCard>
        <OptionCard id="relatorio" $bgColor="red" onClick={handleClick}>
          <h1>RELATÓRIO</h1>
        </OptionCard>
      </OptionsContainer>
      <Footer />
    </Container>
  )
}
