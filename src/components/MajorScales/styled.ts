import theme from 'src/theme'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const NoteSymbol = styled.span`
  font-weight: bold;
  font-size: 125%;
`

export const ButtonsContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  bottom: 2rem;
  left: 50%;

  button:not(:last-child) {
    margin-right: 1rem;
  }
`

type FeedbackProps = {
  isCorrect: boolean
}
export const AnswerFeedbackContainer = styled.div<FeedbackProps>`
  padding-top: 5rem;

  h2 {
    color: ${({ isCorrect }) => isCorrect ? theme.colors.success : theme.colors.error};
    padding-bottom: 0.5rem;
  }
`
