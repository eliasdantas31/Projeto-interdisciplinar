import { useState } from 'react'
import {
  CardapioMenu,
  CardapioOptions,
  Category,
  CategoryContainer,
  CategoryOptions,
  Container,
  NewCategory,
  SearchBar,
  ItemContainer,
  Item
} from './style'

export const AdmCardapio = () => {
  const [openCategories, setOpenCategories] = useState<number[]>([])

  function toggleCategory(index: number) {
    setOpenCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <Container>
      <CardapioMenu>
        <SearchBar>
          <label htmlFor="pesquisar">
            <i className="bi bi-search"></i>
          </label>
          <input type="text" id="pesquisar" placeholder="Pesquisar" />
        </SearchBar>
        <div>
          <CardapioOptions>
            <button>
              Cardápio Online
              <i className="bi bi-caret-down-fill"></i>
            </button>
            <div>
              <button id="cOnline">Cardapio Online</button>
              <button id="cLocal">Cardapio Local</button>
            </div>
          </CardapioOptions>
          <NewCategory>Nova Categoria</NewCategory>
        </div>
      </CardapioMenu>

      <CategoryContainer>
        <Category>
          <CategoryOptions>
            <div>
              <h3>Lanches</h3>
              <button>
                <i className="bi bi-plus-circle" id="addItem"></i> Adicionar
                item
              </button>
            </div>
            <div>
              <button onClick={() => toggleCategory(0)}>
                <i
                  className={
                    openCategories.includes(0)
                      ? 'bi bi-caret-up-fill'
                      : 'bi bi-caret-down-fill'
                  }
                  id="dropDown"
                ></i>
              </button>
            </div>
          </CategoryOptions>

          <ItemContainer $open={openCategories.includes(0)}>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Egg</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Bacon</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Salada</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
          </ItemContainer>
        </Category>
        <Category>
          <CategoryOptions>
            <div>
              <h3>Lanches</h3>
              <button>
                <i className="bi bi-plus-circle" id="addItem"></i> Adicionar
                item
              </button>
            </div>
            <div>
              <button onClick={() => toggleCategory(1)}>
                <i
                  className={
                    openCategories.includes(1)
                      ? 'bi bi-caret-up-fill'
                      : 'bi bi-caret-down-fill'
                  }
                  id="dropDown"
                ></i>
              </button>
            </div>
          </CategoryOptions>

          <ItemContainer $open={openCategories.includes(1)}>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Egg</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Bacon</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Salada</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
          </ItemContainer>
        </Category>
        <Category>
          <CategoryOptions>
            <div>
              <h3>Lanches</h3>
              <button>
                <i className="bi bi-plus-circle" id="addItem"></i> Adicionar
                item
              </button>
            </div>
            <div>
              <button onClick={() => toggleCategory(1)}>
                <i
                  className={
                    openCategories.includes(1)
                      ? 'bi bi-caret-up-fill'
                      : 'bi bi-caret-down-fill'
                  }
                  id="dropDown"
                ></i>
              </button>
            </div>
          </CategoryOptions>

          <ItemContainer $open={openCategories.includes(1)}>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Egg</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Bacon</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
            <Item>
              <div>
                <h3>
                  <span className="itemName">Nome: </span>
                  <span>X-Salada</span>
                </h3>
                <h3>
                  <span className="itemPrice">Valor: </span>
                  <span>R$32,90</span>
                </h3>
                <button>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </div>
              <div>
                <button>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </Item>
          </ItemContainer>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
