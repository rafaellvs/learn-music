import { DiatonicScale } from 'src/types/DiatonicScales'

const MAJOR_SCALE: DiatonicScale = {
  name: 'Major',
  pattern: [2, 2, 1, 2, 2, 2, 1],
  roots: [
    'C', 'D', 'F', 'E', 'G', 'A', 'B',
    'C#', 'F#',
    'Cb', 'Db', 'Eb', 'Gb', 'Ab', 'Bb',
  ],
}

const MINOR_SCALE: DiatonicScale = {
  name: 'Minor',
  pattern: [2, 1, 2, 2, 1, 2, 2],
  roots: [
    'C', 'D', 'F', 'E', 'G', 'A', 'B',
    'C#', 'D#', 'F#', 'G#', 'A#',
    'Eb', 'Ab', 'Bb',
  ],
}

export { MAJOR_SCALE, MINOR_SCALE }
