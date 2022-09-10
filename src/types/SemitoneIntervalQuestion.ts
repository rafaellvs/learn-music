import { Note, Direction } from 'src/types/ChromaticScale'

type SemitoneIntervalQuestion = {
  id: string,
  firstNote: Note,
  secondNote: Note,
  direction: Direction,
  answer: number,
  userAnswer: null | number,
  result: boolean,
}

export type { SemitoneIntervalQuestion }
