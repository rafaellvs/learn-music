import styled from 'styled-components'

import theme from 'src/theme'

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
  }
  
  ${({ isOpen }) => isOpen && `
    ${Bar1} {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    
    ${Bar2} {
      opacity: 0;
    }

    ${Bar3} {
      -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
      transform: rotate(45deg) translate(-8px, -8px) ;  
    }
  `}
`

export const Bar1 = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${theme.colors.white};
  margin: 6px 0;
  transition: 0.4s;
`

export const Bar2 = styled(Bar1)``
export const Bar3 = styled(Bar1)``
