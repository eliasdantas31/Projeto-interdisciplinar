<<<<<<< HEAD
export const AdmGarcom = () => {
  return (
    <div>
      <h1>Garçom</h1>
      {/* conteúdo da tela de garçom */}
    </div>
=======
import { useState } from 'react'
import {
  Container,
  HeaderLine,
  SearchBar,
  AddButton,
  FormCard,
  InputGroup,
  GarcomList,
  GarcomItem
} from './style'

export const AdmGarcom = () => {
  const [showForm, setShowForm] = useState(false)
  const [garcons, setGarcons] = useState<{ email: string }[]>([])
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleAdd = () => {
    if (!email || !senha) return alert('Preencha todos os campos!')

    setGarcons([...garcons, { email }])

    setEmail('')
    setSenha('')
    setShowForm(false)
  }

  return (
    <Container>
      <HeaderLine>
        <SearchBar>
          <label htmlFor="pesquisar">
            <i className="bi bi-search"></i>
          </label>
          <input type="text" id="pesquisar" placeholder="Pesquisar garçom..." />
        </SearchBar>

        <AddButton onClick={() => setShowForm(!showForm)}>
          <i className="bi bi-person-plus-fill"></i>
          Adicionar Garçom
        </AddButton>
      </HeaderLine>

      {showForm && (
        <FormCard>
          <h3>Novo Garçom</h3>

          <InputGroup>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputGroup>

          <button onClick={handleAdd}>Salvar</button>
        </FormCard>
      )}

      <GarcomList>
        {garcons.map((g, index) => (
          <GarcomItem key={index}>
            <p>{g.email}</p>
            <i className="bi bi-trash-fill"></i>
          </GarcomItem>
        ))}
      </GarcomList>
    </Container>
>>>>>>> branch_guilherme
  )
}
