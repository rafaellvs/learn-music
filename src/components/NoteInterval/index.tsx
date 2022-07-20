import React, { useState, useEffect, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Note from 'src/types/Note'
import Direction from 'src/types/Direction'
import IntervalQuestion from 'src/types/IntervalQuestion'

import {
  generateRandomNote,
  generateRandomDirection,
  getDistanceAnswer,
} from 'src/helpers/utils'

import QuestionLog from './QuestionLog'
import {
  Container,
  AnswerButtons,
  AnswerButton,
  NoteSymbol,
} from './styled'

const NoteInterval = (): JSX.Element => {
  const [firstNote, setFirstNote] = useState<Note>(generateRandomNote())
  const [secondNote, setSecondNote] = useState<Note>(generateRandomNote())
  const [direction, setDirection] = useState<Direction>(generateRandomDirection())
  const [userAnswer, setUserAnswer] = useState<IntervalQuestion['userAnswer']>(null)
  const [questionLog, setQuestionLog] = useState<IntervalQuestion[]>([])

  const answer: number = useMemo((): number => {
    return getDistanceAnswer(firstNote, secondNote, direction)
  }, [firstNote, secondNote, direction])

  const handleAnswerClick = (selectedAnswer: number): void => {
    setUserAnswer(selectedAnswer)
  }

  const answerButtons = useMemo((): JSX.Element[] => {
    return Array.from({ length: 12 }).map((_, index) =>
      <AnswerButton
        key={index}
        onClick={() => handleAnswerClick(index + 1)}
      >
        {index + 1}
      </AnswerButton>
    )
  }, [])

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
      <h1>Note interval training</h1>

      <p>
        What is the distance (semitones) between <NoteSymbol>{firstNote}</NoteSymbol> and <NoteSymbol>{secondNote}</NoteSymbol>, going {direction}?
      </p>

      <AnswerButtons>
        {answerButtons}
      </AnswerButtons>

      <QuestionLog questions={questionLog} />
    </Container>
  )
}

export default NoteInterval
