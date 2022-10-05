import React from 'react'

import useDiatonicScale from 'src/hooks/use-diatonic-scale'

import Button from 'src/components/_base/Button'
import NoteLetter from 'src/components/_base/NoteLetter'
import NoteSelection from './NoteSelection'
import AnswerFeedback from './AnswerFeedback'
import { Container, ButtonsContainer } from './styled'

const MajorScales = (): JSX.Element => {
  const {
    majorScale,
    userAnswer,
    answerFeedback,
    handleAddNote,
    handleRemoveNote,
    clearAnswer,
    reloadScale,
  } = useDiatonicScale()
  const rootNote = majorScale[0]

  return (
    <Container>
      <h1>Major Scales</h1>

      <p>
        What are the notes of the <NoteLetter>{rootNote}</NoteLetter> major scale?
      </p>

      <NoteSelection
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
        userAnswer={userAnswer}
      />

      <AnswerFeedback answerFeedback={answerFeedback} />

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
