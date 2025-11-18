import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const FooterContainer = styled.footer`
  height: 88px;
  width: 100%;
  border-radius: 20px;
  background-color: ${colors.red};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  & > h1 {
    font-size: 16px;
    color: ${colors.white};
  }
`

export const FooterContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 16px;
    color: ${colors.white};
  }
`
