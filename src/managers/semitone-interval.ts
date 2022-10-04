import { CHROMATIC_SCALE } from 'src/helpers/constants/chromatic-scale'

import { Direction } from 'src/types/ChromaticScale'
import { SemitoneIntervalQuestion } from 'src/types/SemitoneIntervalQuestion'

import {
  generateRandomDirection,
  generateRandomPitchAttrs,
  generateRandomPitchAttrsByContext,
} from './chromatic-scale'

const getAnswer = (
  firstValue: number,
  secondValue: number,
  direction: Direction
): number => {
  if (firstValue === secondValue) return 12

  return direction === 'up'
    ? (secondValue - firstValue + CHROMATIC_SCALE.length) % CHROMATIC_SCALE.length
    : (firstValue - secondValue + CHROMATIC_SCALE.length) % CHROMATIC_SCALE.length
}

type SemitoneIntervalReturn = {
  firstNote: SemitoneIntervalQuestion['firstNote'],
  secondNote: SemitoneIntervalQuestion['secondNote'],
  direction: SemitoneIntervalQuestion['direction'],
  answer: SemitoneIntervalQuestion['answer']
}
const generateSemitoneIntervalQuestion = (): SemitoneIntervalReturn => {
  const {
    pitch: firstPitch,
    note: firstNote,
    label: firstLabel,
  } = generateRandomPitchAttrs()

  const {
    pitch: secondPitch,
    note: secondNote,
  } = generateRandomPitchAttrsByContext(firstLabel)

  const direction = generateRandomDirection()

  const answer = getAnswer(firstPitch.value, secondPitch.value, direction)

  return {
    firstNote,
    secondNote,
    direction,
    answer,
  }
}

export {
  getAnswer,
  generateSemitoneIntervalQuestion,
}
