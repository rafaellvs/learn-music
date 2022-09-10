import CHROMATIC_SCALE from 'src/helpers/constants/chromatic-scale'

import {
  PitchLabel,
  Pitch,
  Direction,
  Note,
} from 'src/types/ChromaticScale'

type RandomPitchAttrsReturn = {
  pitch: Pitch,
  label: PitchLabel,
  note: Note,
}

const generateRandomDirection = (): Direction =>
  Math.floor(Math.random() * 2) === 0 ? 'up' : 'down'

const generateRandomPitch = (): Pitch =>
  CHROMATIC_SCALE[Math.floor(Math.random() * CHROMATIC_SCALE.length)]

const generateRandomPitchLabel = (): PitchLabel => {
  const labels: Array<PitchLabel> = ['natural', 'sharp', 'flat']
  return labels[Math.floor(Math.random() * labels.length)]
}

// Gets the inverse of input pitch label (sharp / flat)
type InverseLabel = Exclude<PitchLabel, 'natural'>
const getInverseLabel = (label: InverseLabel): InverseLabel =>
  label === 'sharp' ? 'flat' : 'sharp'

// Generates and returns a random pitch, pitch label and non null note
const generateRandomPitchAttrs = (): RandomPitchAttrsReturn => {
  const pitch = generateRandomPitch()
  let note
  let label

  do {
    label = generateRandomPitchLabel()
    note = pitch[label]
  } while (note === null)

  return { pitch, label, note }
}

// Generates a second pitch label, based on another, following the general rule:
// No flat notes and sharp notes in the same context
// If incoming label is 'natural', then second label can be any
// If incoming label is 'sharp' or 'flat', then second label must be 'natural' or the same as incoming label
const generateRandomPitchAttrsByContext = (referenceLabel: PitchLabel): RandomPitchAttrsReturn => {
  if (referenceLabel === 'natural') return generateRandomPitchAttrs()

  let pitchAttrs
  do {
    pitchAttrs = generateRandomPitchAttrs()
  } while (pitchAttrs.label === getInverseLabel(referenceLabel))

  return pitchAttrs
}

export {
  generateRandomPitch,
  generateRandomDirection,
  generateRandomPitchLabel,
  generateRandomPitchAttrs,
  generateRandomPitchAttrsByContext,
  getInverseLabel,
}
