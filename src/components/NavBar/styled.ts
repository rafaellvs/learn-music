import styled from 'styled-components'

import theme from 'src/theme'

type MobileContainerProps = {
  isOpen: boolean
}

export const Container = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  height: ${theme.headerHeight};
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid ${theme.colors.yellow};
  z-index: 10;
`

export const DesktopContainer = styled.nav`
  > a {
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileContainer = styled.nav<MobileContainerProps>`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: calc(100vh - ${theme.headerHeight});
    top: ${theme.headerHeight};  
    left: ${({ isOpen }) => isOpen ? 0 : '-100%'};
    transition: left 0.4s;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    > a {
      padding-bottom: 1rem;
    }
  }
`
