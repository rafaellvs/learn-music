import React, { useEffect, useState } from 'react'

import { Note } from 'src/types/ChromaticScale'

import { createMajorScale } from 'src/managers/diatonic-scales'

import Button from 'src/components/Button'
import NoteSelection from 'src/components/NoteSelection'
import {
  Container,
  NoteSymbol,
  ButtonsContainer,
  AnswerFeedbackContainer,
} from './styled'

type AnswerFeedback = {
  isCorrect: boolean
  wrongNotes: Array<Note>
}

const MajorScales = () => {
  const [majorScale, setMajorScale] = useState<Array<Note>>(createMajorScale().noteScale)
  const [userAnswer, setUserAnswer] = useState<Array<Note>>([])
  const [answerFeedback, setAnswerFeedback] = useState<AnswerFeedback>({ isCorrect: false, wrongNotes: [] })
  const rootNote = majorScale[0]

  const handleAddNote = (note: Note): void => {
    userAnswer.length < 8 &&
    setUserAnswer(state => [...state, note])
  }

  const handleRemoveNote = (index: number): void => {
    setUserAnswer(state => {
      const newAnswer = [...state]
      newAnswer.splice(index, 1)

      return newAnswer
    })
  }

  const clearAnswer = (): void => {
    setUserAnswer([])
    setAnswerFeedback({ isCorrect: false, wrongNotes: [] })
  }

  const reloadScale = (): void => {
    const newScale = createMajorScale().noteScale
    setMajorScale(newScale)
    clearAnswer()
  }

  const isUserAnswerCorrect = (): boolean =>
    userAnswer.every((userNote, index) => userNote === majorScale[index])

  const getWrongNotes = (): Array<Note> =>
    userAnswer.filter((userNote, index) => userNote !== majorScale[index])

  useEffect(() => {
    if (userAnswer.length === 8) {
      isUserAnswerCorrect()
        ? setAnswerFeedback({ isCorrect: true, wrongNotes: [] })
        : setAnswerFeedback({ isCorrect: false, wrongNotes: getWrongNotes() })
    }
  }, [userAnswer])

  return (
    <Container>
      <h1>Major Scales</h1>

      <p>
        What are the notes of the <NoteSymbol>{rootNote}</NoteSymbol> major scale?
      </p>

      <NoteSelection
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
        userAnswer={userAnswer}
      />

      <AnswerFeedbackContainer isCorrect={answerFeedback.isCorrect}>
        {
          !answerFeedback.isCorrect &&
          !!answerFeedback.wrongNotes.length &&
            <>
              <h2>Not quite correct...</h2>
              <p>You missed the following notes:</p>
              <p>
                {answerFeedback.wrongNotes.map((note, index) =>
                  <NoteSymbol key={note + index}>
                    {`${note} `}
                  </NoteSymbol>
                )}
              </p>
            </>
        }
        {
          answerFeedback.isCorrect &&
            <>
              <h2>Correct!</h2>
              <p>Congratulations, you got everything right.</p>
            </>
        }
      </AnswerFeedbackContainer>

      <ButtonsContainer>
        <Button onClick={clearAnswer}>
          Clear answer
        </Button>
        <Button onClick={reloadScale}>
          New scale
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default MajorScales
