import styled from 'styled-components'
import theme from 'src/theme'

type ButtonProps = {
  variant?: 'small'
}
const Button = styled.button<ButtonProps>`
  padding: 1rem;
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: 800;
  border: 1px solid ${theme.colors.black};

  :enabled:hover {
    cursor: pointer;
    background: ${theme.colors.yellow};
  }

  :disabled:hover {
    cursor: not-allowed;
  }

  ${({ variant }) => variant === 'small' && `
    width: 3rem;
    height: 3rem;
    padding: 0;
  `}
`

export default Button
