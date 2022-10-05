import React from 'react'

import { DiatonicScale } from 'src/types/DiatonicScales'

import useDiatonicScale from 'src/hooks/use-diatonic-scale'

import Button from 'src/components/_base/Button'
import NoteLetter from 'src/components/_base/NoteLetter'
import NoteSelection from './NoteSelection'
import AnswerFeedback from './AnswerFeedback'
import { Container, ButtonsContainer } from './styled'

type DiatonicScaleProps = {
  diatonicScale: DiatonicScale
}
const DiatonicScales = ({ diatonicScale }: DiatonicScaleProps): JSX.Element => {
  const {
    scale,
    userAnswer,
    answerFeedback,
    handleAddNote,
    handleRemoveNote,
    clearAnswer,
    reloadScale,
  } = useDiatonicScale(diatonicScale)

  const scaleName = diatonicScale.name
  const rootNote = scale[0]

  return (
    <Container>
      <h1>{scaleName} Scales</h1>

      <p>
        What are the notes of the <NoteLetter>{rootNote}</NoteLetter> {scaleName} scale?
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

export default DiatonicScales
