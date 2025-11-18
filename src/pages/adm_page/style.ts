import styled from 'styled-components'
import { mainTheme as theme } from '../../styles/theme'

const { colors } = theme

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 15px 100px;
`

export const OptionsContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

type OptionCardProps = {
  $largura?: string
  $bgColor?: keyof typeof colors // 'red' | 'yellow' | 'white' | ...
}

export const OptionCard = styled.button<OptionCardProps>`
  height: 230px;
  width: ${({ $largura }) => $largura || '842px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lilita One', sans-serif;
  font-size: 40px;
  font-weight: normal;
  border-radius: 20px;
  color: ${colors.white};
  background-color: ${({ $bgColor }) =>
    $bgColor ? colors[$bgColor] : colors.red};
  border: none;
`
