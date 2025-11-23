import {
  CardapioMenu,
  CardapioOptions,
  Category,
  CategoryContainer,
  Container,
  NewCategory,
  SearchBar
} from './style'

export const AdmCardapio = () => {
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
              {/* ${selectedMenu} */}
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
          <div>
            <h3>Lanches</h3>
            <button>+ Adicionar item</button>
          </div>
          <div>
            <button>
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </Category>
        <Category>
          <div>
            <h3>Lanches</h3>
            <button>+ Adicionar item</button>
          </div>
          <div>
            <button>
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </Category>
        <Category>
          <div>
            <h3>Lanches</h3>
            <button>+ Adicionar item</button>
          </div>
          <div>
            <button>
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </Category>
        <Category>
          <div>
            <h3>Lanches</h3>
            <button>+ Adicionar item</button>
          </div>
          <div>
            <button>
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </Category>
      </CategoryContainer>
    </Container>
  )
}
