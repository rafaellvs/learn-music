import { MAJOR_SCALE, MINOR_SCALE } from 'src/helpers/constants/diatonic-scales'

import { Pitch, Note } from 'src/types/ChromaticScale'
import { DiatonicScale } from 'src/types/DiatonicScales'

import { getNextPitchByInterval, getPitchByNote } from 'src/managers/chromatic-scale'

type CreateScalesReturn = {
  pitchScale: Array<Pitch>
  noteScale: Array<Note>
}
const createPitchAndNoteScales = (rootNote: Note, scale: DiatonicScale): CreateScalesReturn => {
  // Create scale of chromatic pitches
  const rootNotePitch = getPitchByNote(rootNote)
  const pitchScale: Array<Pitch> = []

  let pitchToInsert = rootNotePitch
  pitchScale.push(rootNotePitch)
  scale.pattern.forEach(interval => {
    pitchToInsert = getNextPitchByInterval(pitchToInsert, interval)
    pitchScale.push(pitchToInsert)
  })

  // Create scale of unique notes (the scale should have one of each note letter)
  // This is achieved by veryfing which note letter should be inserted (naturalNotes array)
  // and performing a regex to find the appropriate one in the pitch object
  const naturalNotes: Array<Note> = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  const noteScale: Array<Note> = []

  const rootNoteOnNaturalNotes = naturalNotes.find(note => {
    const regex = new RegExp(note, 'g')
    return regex.test(rootNote)
  })

  if (!rootNoteOnNaturalNotes) {
    throw new Error(`Could not find root note ${rootNote} on base array of notes while trying to create ${scale.name} scale`)
  }

  const rootNoteIndex = naturalNotes.indexOf(rootNoteOnNaturalNotes)

  // Maps scale pitches and determines which label should be used
  pitchScale.forEach((pitch, index) => {
    if (index === 0 || index === 7) noteScale.push(rootNote)
    else {
      const noteLetterToInsert = naturalNotes[(rootNoteIndex + index) % 7]
      const regex = new RegExp(noteLetterToInsert, 'g')

      Object.values(pitch).forEach(pitchLabel => {
        if (typeof pitchLabel !== 'number' && pitchLabel !== null) {
          regex.test(pitchLabel) && noteScale.push(pitchLabel)
        }
      })
    }
  })

  return { pitchScale, noteScale }
}

// Major scale
const generateRandomMajorScaleRoot = (): Note =>
  MAJOR_SCALE.roots[Math.floor(Math.random() * MAJOR_SCALE.roots.length)]

const createMajorScale = (): CreateScalesReturn => {
  const rootNote = generateRandomMajorScaleRoot()
  return createPitchAndNoteScales(rootNote, MAJOR_SCALE)
}

// Minor scale
const generateRandomMinorScaleRoot = (): Note =>
  MINOR_SCALE.roots[Math.floor(Math.random() * MINOR_SCALE.roots.length)]

const createMinorScale = (): CreateScalesReturn => {
  const rootNote = generateRandomMinorScaleRoot()
  return createPitchAndNoteScales(rootNote, MINOR_SCALE)
}

export {
  createPitchAndNoteScales,
  createMajorScale,
  createMinorScale,
}
