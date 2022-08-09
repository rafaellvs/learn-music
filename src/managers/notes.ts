import NOTES from 'src/helpers/constants/notes'
import Note from 'src/types/Note'
import Direction from 'src/types/Direction'

export const generateRandomNote = (): Note =>
  NOTES[Math.floor(Math.random() * NOTES.length)]

export const generateRandomDirection = (): Direction =>
  Math.floor(Math.random() * 2) === 0 ? 'up' : 'down'

export const getSemitonesInterval = (
  firstNote: Note,
  secondNote: Note,
  direction: Direction
): number => {
  if (firstNote === secondNote) return NOTES.length

  const firstNoteIndex = NOTES.indexOf(firstNote)
  const secondNoteIndex = NOTES.indexOf(secondNote)

  return direction === 'up'
    ? (secondNoteIndex - firstNoteIndex + NOTES.length) % NOTES.length
    : (firstNoteIndex - secondNoteIndex + NOTES.length) % NOTES.length
}
