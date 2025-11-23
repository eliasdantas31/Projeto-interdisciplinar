import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const HeaderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; /* Search left / Button right */
  align-items: center;
  padding: 0 20px;
`

export const SearchBar = styled.div`
  height: 50px;
  width: 300px;
  display: flex;

  label {
    height: 50px;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 10px 0 0 10px;
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
    font-size: 22px;
    border: none;
    border-radius: 0 10px 10px 0;
  }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: ${colors.red};
  color: ${colors.white};
  font-size: 20px;
  font-family: 'Lilita One', sans-serif;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  i {
    font-size: 22px;
  }
`

export const FormCard = styled.div`
  background: ${colors.white};
  padding: 20px;
  border-radius: 12px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;

  h3 {
    font-family: 'Lilita One', sans-serif;
    font-size: 26px;
  }

  button {
    background: ${colors.green};
    color: ${colors.white};
    border: none;
    padding: 12px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.03);
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 18px;
    font-family: 'Lilita One', sans-serif;
  }

  input {
    height: 45px;
    background: ${colors.lightGray};
    border: none;
    padding: 0 10px;
    font-size: 18px;
    border-radius: 8px;
  }
`

export const GarcomList = styled.div`
  margin-top: 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* centraliza lista */
`

export const GarcomItem = styled.div`
  height: 60px;
  background: ${colors.white};
  border-radius: 10px;
  padding: 0 15px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  font-family: 'Lilita One', sans-serif;

  i {
    font-size: 24px;
    cursor: pointer;
    transition: 0.2s;
    color: ${colors.red};

    &:hover {
      transform: scale(1.2);
    }
  }
`
