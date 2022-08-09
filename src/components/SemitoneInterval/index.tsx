import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Note from 'src/types/Note'
import Direction from 'src/types/Direction'
import SemitoneIntervalQuestion from 'src/types/SemitoneIntervalQuestion'

import {
  generateRandomNote,
  generateRandomDirection,
  getSemitonesInterval,
} from 'src/managers/notes'

import QuestionLog from './QuestionLog'
import {
  Container,
  AnswerButtonsContainer,
  AnswerButton,
  NoteSymbol,
} from './styled'

type AnswerButtonsProps = {
  handleAnswerClick: (selectedAnswer: number) => void
}

const AnswerButtons = ({ handleAnswerClick }: AnswerButtonsProps): JSX.Element =>
  <AnswerButtonsContainer>
    {Array.from({ length: 12 }).map((_, index) =>
      <AnswerButton
        key={index}
        onClick={() => handleAnswerClick(index + 1)}
      >
        {index + 1}
      </AnswerButton>
    )}
  </AnswerButtonsContainer>

const SemitoneInterval = (): JSX.Element => {
  const [firstNote, setFirstNote] = useState<Note>(generateRandomNote())
  const [secondNote, setSecondNote] = useState<Note>(generateRandomNote())
  const [direction, setDirection] = useState<Direction>(generateRandomDirection())
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

      <AnswerButtons handleAnswerClick={handleAnswerClick} />

      <QuestionLog questions={questionLog} />
    </Container>
  )
}

export default SemitoneInterval
