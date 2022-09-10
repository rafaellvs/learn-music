import React from 'react'

import INTERVALS from 'src/helpers/constants/intervals'

import { SemitoneIntervalQuestion } from 'src/types/SemitoneIntervalQuestion'

import { padNumberWithZeros } from 'src/helpers/utils'

import {
  Container,
  TableContainer,
  Result,
  NotesGrid,
  IntervalGrid,
} from './styled'

type QuestionLogProps = {
  questions: SemitoneIntervalQuestion[]
}

const QuestionLog = (props: QuestionLogProps): JSX.Element => {
  const { questions } = props

  return (
    <Container>
      <h1>Log</h1>

      <TableContainer>
        <table>
          <tbody>
            {questions.map(question =>
              <tr key={question.id}>
                <td>
                  <NotesGrid>
                    <span>{question.firstNote}</span>
                    <span>{'-->'}</span>
                    <span>{question.secondNote}</span>
                    <span>{`going ${question.direction}`}</span>
                  </NotesGrid>
                </td>
                <td>
                  <IntervalGrid>
                    <span>{`${padNumberWithZeros(question.answer, 2)} semitones: `}</span>
                    <span>{INTERVALS[question.answer - 1]}</span>
                  </IntervalGrid>
                </td>
                <td>
                  <Result $result={question.result}>
                    {question.result ? 'Correct' : `Wrong (${question.userAnswer})`}
                  </Result>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  )
}

export default QuestionLog
