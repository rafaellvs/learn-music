import styled from 'styled-components'
import theme from 'src/theme'

export const Container = styled.div``

export const Notes = styled.div`
  padding: 2rem 0;
`

export const SelectedNotes = styled.div`
  display: flex;
  justify-content: center;
  
  button, div {
    margin: 0 0.3rem;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 3rem);
    grid-gap: 1rem;
    justify-items: center;
  }
`

export const EmptyNote = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px dashed ${theme.colors.yellow};
`

export const ScaleDegree = styled.p`
  padding-top: 0.5rem;
  font-weight: bold;
`
