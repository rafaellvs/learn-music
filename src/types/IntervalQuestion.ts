import Note from 'src/types/Note'
import Direction from 'src/types/Direction'

type IntervalQuestion = {
  id: string,
  firstNote: Note,
  secondNote: Note,
  direction: Direction,
  answer: number,
  userAnswer: null | number,
  result: boolean,
}

export default IntervalQuestion
