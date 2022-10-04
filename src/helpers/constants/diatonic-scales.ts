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

export { MAJOR_SCALE }
