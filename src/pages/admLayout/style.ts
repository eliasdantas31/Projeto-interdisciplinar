import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 21px 100px;
  background-color: ${colors.lightGray};
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
`

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 16px;
  /* você pode ajustar depois para ficar igual às telas do Figma */
`
