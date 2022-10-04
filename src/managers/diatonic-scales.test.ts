import { MAJOR_SCALE } from 'src/helpers/constants/diatonic-scales'
import { createPitchAndNoteScales } from './diatonic-scales'

test('Major scales', () => {
  let scales

  // C Major
  scales = createPitchAndNoteScales('C', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])

  // E Major
  scales = createPitchAndNoteScales('E', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'])

  // F# Major
  scales = createPitchAndNoteScales('F#', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#', 'F#'])

  // C# Major
  scales = createPitchAndNoteScales('C#', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'])

  // Ab Major
  scales = createPitchAndNoteScales('Ab', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G', 'Ab'])

  // Bb Major
  scales = createPitchAndNoteScales('Bb', MAJOR_SCALE)
  expect(scales.noteScale).toEqual(['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'])
})
