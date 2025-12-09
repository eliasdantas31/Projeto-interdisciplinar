import { Container } from './style'

import { MenuComponent } from '../../components/MenuComponet'
import { Footer } from '../../components/Footer'

export const CardapioADM = () => {
  return (
    <Container>
      <h1>Cardápio</h1>
      <MenuComponent />
      <Footer />
    </Container>
  )
}
