import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import SemitoneIntervalQuestion from 'src/types/SemitoneIntervalQuestion'

import {
  generateRandomNote,
  generateRandomDirection,
  getSemitonesInterval,
} from 'src/managers/notes'

import QuestionLog from './QuestionLog'
import {
  Container,
  AnswerButtons,
  AnswerButton,
  NoteSymbol,
} from './styled'

const SemitoneInterval = (): JSX.Element => {
  const [firstNote, setFirstNote] = useState<SemitoneIntervalQuestion['firstNote']>(generateRandomNote())
  const [secondNote, setSecondNote] = useState<SemitoneIntervalQuestion['secondNote']>(generateRandomNote())
  const [direction, setDirection] = useState<SemitoneIntervalQuestion['direction']>(generateRandomDirection())
  const [userAnswer, setUserAnswer] = useState<SemitoneIntervalQuestion['userAnswer']>(null)
  const [questionLog, setQuestionLog] = useState<SemitoneIntervalQuestion[]>([])

  const answer: number = getSemitonesInterval(firstNote, secondNote, direction)

  const handleAnswerClick = (selectedAnswer: number): void => {
    setUserAnswer(selectedAnswer)
  }

  const resetQuestionParams = (): void => {
    setFirstNote(generateRandomNote())
    setSecondNote(generateRandomNote())
    setDirection(generateRandomDirection())
    setUserAnswer(null)
  }

  const addToQuestionLog = (): void => {
    setQuestionLog([
      {
        id: uuidv4(),
        firstNote,
        secondNote,
        direction,
        answer,
        userAnswer,
        result: userAnswer === answer,
      },
      ...questionLog,
    ])
  }

  useEffect(() => {
    if (userAnswer) {
      addToQuestionLog()
      resetQuestionParams()
    }
  }, [userAnswer])

  return (
    <Container>
      <h1>Semitone interval training</h1>

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
