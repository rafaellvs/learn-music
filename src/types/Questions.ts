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

type DiatonicScaleQuestion = {
  scale: Array<Note>
  userAnswer: Array<Note>
  answerFeedback: {
    isCorrect: boolean
    wrongNotes: Array<Note>
  }
}

export type { SemitoneIntervalQuestion, DiatonicScaleQuestion }
