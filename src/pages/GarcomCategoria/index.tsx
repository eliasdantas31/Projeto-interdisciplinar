import { useState } from 'react'
import { Header } from '../../components/Header'

import {
  Container,
  TopButtons,
  SearchBar,
  CategoriaBox,
  CategoriasContainer,
  PainelItens,
  ItemLinha,
  ModalOverlay,
  ModalContent,
  OptionButton,
  CloseButton
} from './style'

export const GarcomCategoria = () => {
  const [categoriaAberta, setCategoriaAberta] = useState<string | null>(null)

  const [itemSelecionado, setItemSelecionado] = useState<string | null>(null)
  const [modalAberto, setModalAberto] = useState(false)

  const categorias = [
    'Lanches Especiais',
    'Lanches',
    'Hot Dogs',
    'Porções',
    'Bebidas',
    'Sucos'
  ]

  const itensPorCategoria: Record<string, string[]> = {
    'Lanches Especiais': [
      'Churrasquinho',
      'Churrasquinho 2',
      'Churrasquinho 3'
    ],
    Lanches: ['X-egg-lombo', 'X-tudo'],
    'Hot Dogs': ['Dog simples', 'Dog especial'],
    Porções: ['Batata frita', 'Calabresa'],
    Bebidas: ['Refrigerante', 'Suco'],
    Sucos: ['Suco Natural', 'Suco 2L']
  }

  const opcoesEdicao = [
    '+ Adicional de queijo',
    '+ Adicional de bacon',
    '- Remover salada',
    '- Remover molho'
  ]

  const toggleCategoria = (cat: string) => {
    setCategoriaAberta(categoriaAberta === cat ? null : cat)
  }

  const abrirEdicao = (item: string) => {
    setItemSelecionado(item)
    setModalAberto(true)
  }

  return (
    <Container>
      <Header $variant="garcom" />

      <TopButtons>
        <button className="pedido">Ver Pedido Atual</button>
        <button className="finalizar">Finalizar</button>
      </TopButtons>

      <SearchBar>
        <div className="icon">🔍</div>
        <input placeholder="Pesquisar" />
      </SearchBar>

      <CategoriasContainer>
        {categorias.map((cat) => (
          <div key={cat} style={{ width: '100%' }}>
            <CategoriaBox onClick={() => toggleCategoria(cat)}>
              <h3>{cat}</h3>
              <span style={{ fontSize: '24px' }}>
                {categoriaAberta === cat ? '▲' : '▼'}
              </span>
            </CategoriaBox>

            {categoriaAberta === cat && (
              <PainelItens>
                {itensPorCategoria[cat]?.map((item) => (
                  <ItemLinha key={item}>
                    <p>{item}</p>
                    <button onClick={() => abrirEdicao(item)}>ADICIONAR</button>
                  </ItemLinha>
                ))}
              </PainelItens>
            )}
          </div>
        ))}
      </CategoriasContainer>

      {/* MODAL DE EDIÇÃO */}
      {modalAberto && (
        <ModalOverlay>
          <ModalContent>
            <h2>Editando: {itemSelecionado}</h2>

            {opcoesEdicao.map((op) => (
              <OptionButton key={op}>{op}</OptionButton>
            ))}

            <CloseButton onClick={() => setModalAberto(false)}>
              Concluir
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default GarcomCategoria