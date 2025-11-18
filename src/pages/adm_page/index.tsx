import { Container, OptionsContainer, OptionCard } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const ADMPanel = () => {
  return (
    <Container>
      <Header />
      <OptionsContainer>
        <OptionCard $bgColor="red">
          <h1>PEDIDOS</h1>
        </OptionCard>
        <OptionCard $bgColor="yellon">
          <h1>GARÇOM</h1>
        </OptionCard>
        <OptionCard $largura="1339px" $bgColor="yellon">
          <h1>CARDÁPIO</h1>
        </OptionCard>
        <OptionCard $largura="345px" $bgColor="red">
          <h1>o</h1>
        </OptionCard>
        <OptionCard $bgColor="yellon">
          <h1>ROBÔ</h1>
        </OptionCard>
        <OptionCard $bgColor="red">
          <h1>RELATÓRIO</h1>
        </OptionCard>
      </OptionsContainer>
      <Footer />
    </Container>
  )
}

export default ADMPanel
