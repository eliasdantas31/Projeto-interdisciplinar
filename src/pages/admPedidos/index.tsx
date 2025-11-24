import {
  Container,
  Item,
  ItensList,
  PedidosContainer,
  PedidosContent,
  PedidosMenu,
  PedidosOptions,
  SearchBar
} from './style'

export const AdmPedidos = () => {
  return (
    <Container>
      <PedidosMenu>
        <SearchBar>
          <label htmlFor="pesquisar">
            <i className="bi bi-search"></i>
          </label>
          <input type="text" id="pesquisar" placeholder="Pesquisar" />
        </SearchBar>
        <div>
          <PedidosOptions>
            <button>
              Pedidos Local
              <i className="bi bi-caret-down-fill"></i>
            </button>
            <div>
              <button id="cOnline">Pedidos Online</button>
              <button id="cLocal">Pedidos Local</button>
            </div>
          </PedidosOptions>
        </div>
      </PedidosMenu>
      <PedidosContainer>
        <PedidosContent className="ocupado">
          <div>
            <h3>
              Pedidos Abertos <i className="bi bi-door-open"></i>
            </h3>
          </div>
          <ItensList>
            <Item>
              <h4>
                <i className="bi bi-house"></i> Mesa 1
              </h4>
              <div className="pedidoInfo">
                <p>Valor Total:</p>
                <span>R$ 0</span>
              </div>
              <hr />
              <div className="pedidoActions">
                <button>Editar</button>
                <button>Fechar</button>
                <button>Excluir</button>
              </div>
            </Item>
          </ItensList>
        </PedidosContent>
        <PedidosContent className="fechado">
          <div>
            <h3>
              Pedidos Fechados <i className="bi bi-door-closed"></i>
            </h3>
          </div>
          <ItensList>
            <Item>
              <h4>
                <i className="bi bi-house"></i> Mesa 1
              </h4>
              <div className="pedidoInfo">
                <p>Valor Total:</p>
                <span>R$ 0</span>
              </div>
              <hr />
              <div className="pedidoActions">
                <button>Concluir</button>
                <button>Excluir</button>
              </div>
            </Item>
          </ItensList>
        </PedidosContent>
        <PedidosContent className="fanalizado">
          <div>
            <h3>
              Pedidos Concluidos <i className="bi bi-check2-circle"></i>
            </h3>
          </div>
          <ItensList>
            <Item>
              <h4>
                <i className="bi bi-house"></i> Mesa 1
              </h4>
              <div className="pedidoInfo">
                <p>Valor Total:</p>
                <span>R$ 0</span>
              </div>
              <hr />
              <div className="pedidoActions">
                <button>Finalizar</button>
              </div>
            </Item>
          </ItensList>
        </PedidosContent>
      </PedidosContainer>
    </Container>
  )
}
