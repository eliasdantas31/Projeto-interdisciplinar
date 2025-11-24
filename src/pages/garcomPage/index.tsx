import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'

import {
  Container,
  GarcomContainer,
  NovoPedido,
  TableInfo,
  TablesContainer,
  Table,
  PopUpContainer,
  PopUpContent
} from './style'

export const GarcomPage = () => {
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false)

  const handleExibir = () => {
    navigate('/garcomCategoria')
  }

  const handleNovoPedido = () => {
    setShowPopup(true)
  }

  const handleCancelar = () => {
    setShowPopup(false)
  }

  const handleAdicionar = () => {
    // lógica para adicionar pedido
    setShowPopup(false)
  }

  return (
    <Container>
      <Header $variant="garcom" />
      <GarcomContainer>
        <NovoPedido>
          <h1>Pedidos</h1>
          <button onClick={handleNovoPedido}>Novo pedido</button>
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

      <PopUpContainer $show={showPopup}>
        <PopUpContent>
          <div>
            <input type="text" placeholder="N.Mesa" />
            <input type="text" placeholder="Nome Cliente" />
          </div>
          <input type="text" placeholder="Observação:" />
          <div>
            <button onClick={handleAdicionar}>ADICIONAR</button>
            <button onClick={handleCancelar}>CANCELAR</button>
          </div>
        </PopUpContent>
      </PopUpContainer>
    </Container>
  )
}

export default GarcomPage
