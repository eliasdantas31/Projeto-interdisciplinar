import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 15px;
`

export const GarcomContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 15px;
`

export const NovoPedido = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }

  h1 {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 40px;
    background-color: ${colors.red};
    color: ${colors.white};
    font-family: 'Lilita One', sans-serif;
    font-size: 40px;
    font-weight: normal;
    border-radius: 20px 0px 0px 20px;
    cursor: default;

    @media screen and (max-width: 1024px) {
      font-size: 35px;
    }

    @media screen and (max-width: 768px) {
      padding-left: 20px;
      font-size: 25px;
    }
  }

  button {
    height: 100%;
    width: 60%;
    background-color: ${colors.yellow};
    color: ${colors.white};
    font-family: 'Lilita One', sans-serif;
    font-size: 40px;
    font-weight: normal;
    border-radius: 0px 20px 20px 0px;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      font-size: 35px;
    }

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`

export const TableInfo = styled.div`
  height: 23px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    div {
      height: 100%;
      width: 25px;
    }

    .fechada {
      background-color: ${colors.yellow};
    }

    .ocupada {
      background-color: ${colors.red};
    }

    p {
      font-family: 'Lilita One', sans-serif;
      font-size: 20px;
      font-weight: normal;
      color: ${colors.black};
    }
  }
`
export const TablesContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`

export const Table = styled.div`
  height: max-content;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 20px;
  gap: 10px;

  h3 {
    font-family: 'Lilita One', sans-serif;
    font-size: 32px;
    font-weight: normal;
    cursor: default;
  }

  button {
    height: 40px;
    width: 113px;
    background-color: ${colors.red};
    border: none;
    border-radius: 5px;
    color: ${colors.white};
    font-family: 'Lilita One', sans-serif;
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;

    h3 {
      font-size: 25px;
    }
  }
`
