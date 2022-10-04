import styled from 'styled-components'

export const Container = styled.div``

export const ButtonsContainer = styled.div`
  padding: 1rem 0;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 3rem);
    grid-gap: 0.5rem;
    justify-content: center;
  }
`
