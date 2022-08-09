import styled from 'styled-components'

import theme from 'src/theme'

export const Container = styled.div``

export const AnswerButtonsContainer = styled.div`
  padding: 1rem 0;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 3rem);
    grid-gap: 0.5rem;
    justify-content: center;
  }
`

export const AnswerButton = styled.button`
  width: 3rem;
  height: 3rem;
  color: ${theme.colors.black};
  font-size: 1rem;
  font-weight: 800;
  border: 1px solid ${theme.colors.black};

  :hover {
    cursor: pointer;
    background: ${theme.colors.yellow};
  }
`

export const NoteSymbol = styled.span`
  font-weight: bold;
  font-size: 125%;
`

export const QuestionLog = styled.div`
  padding-top: 3rem;
`
