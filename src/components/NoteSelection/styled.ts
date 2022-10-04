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

export const Button = styled.button`
  width: 3rem;
  height: 3rem;
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
`
