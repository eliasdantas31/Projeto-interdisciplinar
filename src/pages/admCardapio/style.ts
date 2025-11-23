import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const Container = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const CardapioMenu = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;

  div {
    display: flex;
    gap: 20px;
  }
`

export const SearchBar = styled.div`
  height: max-content;
  width: 300px;
  display: flex;

  label {
    height: 50px;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 10px 0px 0px 10px;
    color: ${colors.black};
    background-color: ${colors.white};
    cursor: pointer;
  }

  input {
    height: 50px;
    width: 100%;
    text-align: center;
    background-color: ${colors.white};
    color: ${colors.black};
    font-family: 'Lilita One', sans-serif;
    font-size: 24px;
    font-weight: normal;
    border: none;
    border-radius: 0px 10px 10px 0px;
  }
`

export const CardapioOptions = styled.div`
  height: max-content;
  width: 255px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    color: ${colors.black};
    font-family: 'Lilita One', sans-serif;
    font-size: 24px;
    border: none;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
  }

  div {
    height: max-content;
    width: 100%;
    display: none;
    button {
      background-color: ${colors.white};
    }
  }
`

export const NewCategory = styled.button`
  height: 50px;
  width: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
  color: ${colors.white};
  font-family: 'Lilita One', sans-serif;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export const CategoryContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`

export const Category = styled.div`
  height: 125px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: ${colors.white};
  color: ${colors.black};
  font-family: 'Lilita One', sans-serif;
  border: none;
  border-radius: 10px;
  cursor: default;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
      font-size: 25px;
    }

    button {
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;

      i {
        font-size: 50px;
        color: ${colors.yellow};
      }
    }
  }
`
