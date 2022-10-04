import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import theme from 'src/theme'

const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;

  :hover {
    cursor: pointer;
    color: ${theme.colors.yellow};
  }
`

export default Link
