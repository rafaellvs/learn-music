import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SemitoneIntervalQuestion } from 'src/types/Questions'

import { generateSemitoneIntervalQuestion } from 'src/managers/semitone-interval'

import Button from 'src/components/_base/Button'
import NoteLetter from 'src/components/_base/NoteLetter'
import QuestionLog from './QuestionLog'
import { Container, ButtonsContainer } from './styled'

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
        What is the distance (semitones) between <NoteLetter>{firstNote}</NoteLetter> and <NoteLetter>{secondNote}</NoteLetter>, going {direction}?
      </p>

      <ButtonsContainer>
        {Array.from({ length: 12 }).map((_, index) =>
          <Button
            key={index}
            variant='small'
            onClick={() => handleAnswerClick(index + 1)}
          >
            {index + 1}
          </Button>
        )}
      </ButtonsContainer>

      <QuestionLog questions={questionLog} />
    </Container>
  )
}

export default SemitoneInterval
