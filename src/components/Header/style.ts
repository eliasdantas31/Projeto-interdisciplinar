import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'
import LogoBaita from '../../assets/BaitaLogo.png'

const { colors } = theme

export const HeaderContainer = styled.header`
  height: 88px;
  width: 100%;
  border-radius: 20px;
  background-color: ${colors.red};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 26px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

export const Logo = styled.div`
  height: 75px;
  width: 75px;
  background-image: url(${LogoBaita});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const HeaderContent = styled.ul`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > li {
    list-style: none;
    margin-left: 20px;
    & > button {
      color: ${colors.white};
      font-size: 28px;
      font-family: 'Lilita One', sans-serif;
      background: none;
      border: none;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 5px;
        background: ${colors.white};
        transition: width 0.5s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`
