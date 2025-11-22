import { Outlet } from 'react-router-dom'
import { Container, Content, PageWrapper } from './style'
import { MenuComponent } from '../../components/MenuComponet'
import { Footer } from '../../components/Footer'

export const AdmLayout = () => {
  return (
    <Container>
      <Content>
        {/* Menu fixo à esquerda */}
        <MenuComponent />

        {/* Área onde cada página (Pedidos, Cardápio, etc.) vai ser renderizada */}
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </Content>

      {/* Footer sempre com variant="menu" */}
      <Footer $variant="menu" />
    </Container>
  )
}
