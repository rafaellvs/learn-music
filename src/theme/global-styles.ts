import { createGlobalStyle } from 'styled-components'

import theme from 'src/theme'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.colors.white};
    font-family: 'Roboto Slab';
    letter-spacing: 1.2px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Sans';
    letter-spacing: 1.5px;
    font-weight: 800;
  }

  h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
`

export default GlobalStyles
