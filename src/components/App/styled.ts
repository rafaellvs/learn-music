import styled from 'styled-components'

import theme from 'src/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${theme.colors.black};
`

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  margin-top: ${theme.headerHeight};
`
