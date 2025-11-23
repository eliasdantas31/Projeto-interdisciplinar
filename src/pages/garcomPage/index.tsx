import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'

import {
  Container,
  GarcomContainer,
  NovoPedido,
  TableInfo,
  TablesContainer,
  Table
} from './style'

export const GarcomPage = () => {
  const navigate = useNavigate()

  const handleExibir = () => {
  navigate('/garcomCategoria')
  };


  return (
    <Container>
      <Header $variant="garcom" />
      <GarcomContainer>
        <NovoPedido>
          <h1>Pedidos</h1>
          <button>Novo pedido</button>
        </NovoPedido>

        <TableInfo>
          <div>
            <div className="fechada"></div>
            <p>Ocupada</p>
          </div>
          <div>
            <div className="ocupada"></div>
            <p>Fechada</p>
          </div>
        </TableInfo>

        <TablesContainer>
          <Table>
            <h3>Mesa 01</h3>
            <button onClick={handleExibir}>EXIBIR</button>
          </Table>
        </TablesContainer>
      </GarcomContainer>
    </Container>
  )
}

export default GarcomPage
