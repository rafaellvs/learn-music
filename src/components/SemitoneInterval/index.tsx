import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SemitoneIntervalQuestion } from 'src/types/SemitoneIntervalQuestion'

import { generateSemitoneIntervalQuestion } from 'src/managers/semitone-interval'

import QuestionLog from './QuestionLog'
import {
  Container,
  AnswerButtons,
  AnswerButton,
  NoteSymbol,
} from './styled'

const SemitoneInterval = (): JSX.Element => {
  const [questionLog, setQuestionLog] = useState<SemitoneIntervalQuestion[]>([])

  const { firstNote, secondNote, direction, answer } = generateSemitoneIntervalQuestion()

  const handleAnswerClick = (selectedAnswer: SemitoneIntervalQuestion['answer']): void => {
    setQuestionLog([
      {
        id: uuidv4(),
        firstNote,
        secondNote,
        direction,
        answer,
        userAnswer: selectedAnswer,
        result: selectedAnswer === answer,
      },
      ...questionLog,
    ])
  }

  return (
    <Container>
      <h1>Semitone interval</h1>

      <p>
        What is the distance (semitones) between <NoteSymbol>{firstNote}</NoteSymbol> and <NoteSymbol>{secondNote}</NoteSymbol>, going {direction}?
      </p>

      <AnswerButtons>
        {Array.from({ length: 12 }).map((_, index) =>
          <AnswerButton
            key={index}
            onClick={() => handleAnswerClick(index + 1)}
          >
            {index + 1}
          </AnswerButton>
        )}
      </AnswerButtons>

      <QuestionLog questions={questionLog} />
    </Container>
  )
}

export default SemitoneInterval
