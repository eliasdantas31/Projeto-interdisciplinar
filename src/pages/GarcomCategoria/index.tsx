import { useEffect, useState } from 'react'
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
import { NovoPedido } from '../garcomPage/style'

interface Category {
  id: number
  name: string
}

interface Item {
  id: number
  name: string
  categoryId: number
}

export const GarcomCategoria = () => {
  const [categoriaAberta, setCategoriaAberta] = useState<number | null>(null)
  const [itemSelecionado, setItemSelecionado] = useState<Item | null>(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [itensPorCategoria, setItensPorCategoria] = useState<Record<number, Item[]>>({})

  const opcoesEdicao = [
    '+ Adicional de queijo',
    '+ Adicional de bacon',
    '- Remover salada',
    '- Remover molho'
  ]

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost/pic/public/index.php/category')
        const data: Category[] = await res.json()
        setCategories(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCategories()
  }, [])

  const toggleCategoria = async (cat: Category) => {
    if (categoriaAberta === cat.id) {
      setCategoriaAberta(null)
      return
    }

    setCategoriaAberta(cat.id)

    if (!itensPorCategoria[cat.id]) {
      try {
        const res = await fetch(`http://localhost/pic/public/index.php/categoryItem`)
        const data: Item[] = await res.json()
        const itemsDaCategoria = data.filter(item => item.categoryId === cat.id)
        setItensPorCategoria(prev => ({ ...prev, [cat.id]: itemsDaCategoria }))
      } catch (err) {
        console.log(err)
      }
    }
  }

  const abrirEdicao = (item: Item) => {
    setItemSelecionado(item)
    setModalAberto(true)
  }

  return (
    <Container>
      <Header $variant="garcom" />

      <NovoPedido>
        <button className="pedido">Ver Pedido Atual</button>
        <button className="finalizar">Finalizar</button>
      </NovoPedido>

      <SearchBar>
        <div className="icon">🔍</div>
        <input placeholder="Pesquisar" />
      </SearchBar>

      <CategoriasContainer>
        {categories.map(cat => (
          <div key={cat.id} style={{ width: '100%' }}>
            <CategoriaBox onClick={() => toggleCategoria(cat)}>
              <h3>{cat.name}</h3>
              <span style={{ fontSize: '24px' }}>
                {categoriaAberta === cat.id ? '▲' : '▼'}
              </span>
            </CategoriaBox>

            {categoriaAberta === cat.id && (
              <PainelItens>
                {itensPorCategoria[cat.id]?.map(item => (
                  <ItemLinha key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={() => abrirEdicao(item)}>ADICIONAR</button>
                  </ItemLinha>
                ))}
              </PainelItens>
            )}
          </div>
        ))}
      </CategoriasContainer>

      {/* MODAL DE EDIÇÃO */}
      {modalAberto && itemSelecionado && (
        <ModalOverlay>
          <ModalContent>
            <h2>Editando: {itemSelecionado.name}</h2>
            {opcoesEdicao.map(op => (
              <OptionButton key={op}>{op}</OptionButton>
            ))}
            <CloseButton onClick={() => setModalAberto(false)}>Concluir</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default GarcomCategoria
