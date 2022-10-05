import React from 'react'

import { DiatonicScaleQuestion } from 'src/types/Questions'

import NoteLetter from 'src/components/_base/NoteLetter'
import { Container } from './styled'

type AnswerFeedbackProps = {
  answerFeedback: DiatonicScaleQuestion['answerFeedback']
}

const AnswerFeedback = ({ answerFeedback }: AnswerFeedbackProps): JSX.Element => {
  const { isCorrect, wrongNotes } = answerFeedback

  return (
    <Container isCorrect={isCorrect}>
      {
        !isCorrect &&
        !!wrongNotes.length &&
          <>
            <h2>Not quite correct...</h2>
            <p>You missed the following notes:</p>
            <p>
              {wrongNotes.map((note, index) =>
                <NoteLetter key={note + index}>
                  {`${note} `}
                </NoteLetter>
              )}
            </p>
          </>
      }
      {
        isCorrect &&
          <>
            <h2>Correct!</h2>
            <p>Congratulations, you got everything right.</p>
          </>
      }
    </Container>
  )
}

export default AnswerFeedback
