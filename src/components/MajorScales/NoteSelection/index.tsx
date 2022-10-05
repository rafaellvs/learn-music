import React from 'react'

import { Note } from 'src/types/ChromaticScale'
import { DiatonicScaleQuestion } from 'src/types/Questions'

import { CHROMATIC_SCALE } from 'src/helpers/constants/chromatic-scale'

import Button from 'src/components/_base/Button'
import {
  Container,
  Notes,
  SelectedNotes,
  EmptyNote,
  ScaleDegree,
} from './styled'

type NoteSelectionProps = {
  handleAddNote: (note: Note) => void
  handleRemoveNote: (index: number) => void
  userAnswer: DiatonicScaleQuestion['userAnswer']
}

const NoteSelection = ({
  handleAddNote,
  handleRemoveNote,
  userAnswer,
}: NoteSelectionProps): JSX.Element => {
  const allNotes: Array<Note> = []

  CHROMATIC_SCALE.forEach(pitch =>
    Object.values(pitch).forEach(pitchLabel => {
      pitchLabel !== null &&
      typeof pitchLabel !== 'number' &&
      allNotes.push(pitchLabel)
    })
  )

  return (
    <Container>
      <Notes>
        {allNotes.map(pitchLabel =>
          <Button
            key={pitchLabel}
            variant='small'
            disabled={userAnswer.length === 8}
            onClick={() => handleAddNote(pitchLabel)}
          >
            {pitchLabel}
          </Button>

        )}
      </Notes>

      <SelectedNotes>
        {userAnswer.map((note, index) =>
          <div key={note + index}>
            <Button
              variant='small'
              onClick={() => handleRemoveNote(index)}
            >
              {note}
            </Button>
            <ScaleDegree>{index + 1}</ScaleDegree>
          </div>
        )}

        {Array
          .from({ length: 8 - userAnswer.length })
          .map((_, index) =>
            <div key={index}>
              <EmptyNote />
              <ScaleDegree>{index + 1 + userAnswer.length}</ScaleDegree>
            </div>
          )}
      </SelectedNotes>
    </Container>
  )
}

export default NoteSelection
