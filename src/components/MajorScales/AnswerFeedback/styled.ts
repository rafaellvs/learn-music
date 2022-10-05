import styled from 'styled-components'
import theme from 'src/theme'

type ContainerProps = {
  isCorrect: boolean
}

export const Container = styled.div<ContainerProps>`
  padding-top: 5rem;

  h2 {
    color: ${({ isCorrect }) => isCorrect ? theme.colors.success : theme.colors.error};
    padding-bottom: 0.5rem;
  }
`
