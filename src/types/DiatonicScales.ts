import { Note } from 'src/types/ChromaticScale'

type DiatonicScale = {
  name: string
  pattern: [number, number, number, number, number, number, number]
  roots: Array<Note>
}

export type { DiatonicScale }
