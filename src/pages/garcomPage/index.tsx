<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'

=======
>>>>>>> branch_elias2
import {
  Container,
  GarcomContainer,
  NovoPedido,
  TableInfo,
  TablesContainer,
  Table
} from './style'

<<<<<<< HEAD
export const GarcomPage = () => {
  const navigate = useNavigate()

  const handleExibir = () => {
    navigate('/garcomCategoria')
  }

=======
import { Header } from '../../components/Header'

export const GarcomPage = () => {
>>>>>>> branch_elias2
  return (
    <Container>
      <Header $variant="garcom" />
      <GarcomContainer>
        <NovoPedido>
          <h1>Pedidos</h1>
          <button>Novo pedido</button>
        </NovoPedido>
<<<<<<< HEAD

=======
>>>>>>> branch_elias2
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
<<<<<<< HEAD

        <TablesContainer>
          <Table>
            <h3>Mesa 01</h3>
            <button onClick={handleExibir}>EXIBIR</button>
=======
        <TablesContainer>
          <Table>
            <h3>Nome Mesa/pedido</h3>
            <button>EXIBIR</button>
>>>>>>> branch_elias2
          </Table>
        </TablesContainer>
      </GarcomContainer>
    </Container>
  )
}
<<<<<<< HEAD

export default GarcomPage
=======
>>>>>>> branch_elias2
