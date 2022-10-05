import styled from 'styled-components'
import theme from 'src/theme'

export const Container = styled.div``

export const Notes = styled.div`
  padding: 1rem 0;
`

export const SelectedNotes = styled.div`
  display: flex;
  justify-content: center;
  
  button, div {
    margin: 0 0.3rem;
  }
`

export const EmptyNote = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px dashed ${theme.colors.yellow};
`
