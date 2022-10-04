import React from 'react'

import { Note } from 'src/types/ChromaticScale'

import { CHROMATIC_SCALE } from 'src/helpers/constants/chromatic-scale'

import {
  Container,
  Notes,
  SelectedNotes,
  EmptyNote,
  Button,
} from './styled'

type NoteSelectionProps = {
  handleAddNote: (note: Note) => void
  handleRemoveNote: (index: number) => void
  userAnswer: Array<Note>
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
            disabled={userAnswer.length === 8}
            onClick={() => handleAddNote(pitchLabel)}
          >
            {pitchLabel}
          </Button>

        )}
      </Notes>

      <SelectedNotes>
        {userAnswer.map((note, index) =>
          <Button
            key={note + index}
            onClick={() => handleRemoveNote(index)}
          >
            {note}
          </Button>
        )}

        {Array
          .from({ length: 8 - userAnswer.length })
          .map((_, index) =>
            <EmptyNote key={index} />
          )}
      </SelectedNotes>
    </Container>
  )
}

export default NoteSelection
