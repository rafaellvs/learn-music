import styled from 'styled-components'
import theme from 'src/theme'

const Button = styled.button`
  padding: 1rem;
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: 800;
  border: 1px solid ${theme.colors.black};

  :hover {
    cursor: pointer;
    background: ${theme.colors.yellow};
  }
`

export default Button
