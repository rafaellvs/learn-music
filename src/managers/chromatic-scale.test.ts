import { Pitch } from 'src/types/ChromaticScale'

import {
  getPitchByNote,
  getPitchByValue,
  getNextPitchByInterval,
  getPreviousPitchByInterval,
  getInverseLabel,
} from './chromatic-scale'

test('check getPitchByNote correctness', () => {
  let pitch

  // D#
  pitch = getPitchByNote('D#')
  expect(pitch).toEqual({
    value: 4,
    natural: null,
    sharp: 'D#',
    flat: 'Eb',
  })

  // Eb
  pitch = getPitchByNote('Eb')
  expect(pitch).toEqual({
    value: 4,
    natural: null,
    sharp: 'D#',
    flat: 'Eb',
  })

  // G
  pitch = getPitchByNote('G')
  expect(pitch).toEqual({
    value: 8,
    natural: 'G',
    sharp: null,
    flat: null,
  })
})

test('check getPitchByValue correctness', () => {
  let pitch

  // F
  pitch = getPitchByValue(6)
  expect(pitch).toEqual({
    value: 6,
    natural: 'F',
    sharp: 'E#',
    flat: null,
  })

  // C#
  pitch = getPitchByValue(2)
  expect(pitch).toEqual({
    value: 2,
    natural: null,
    sharp: 'C#',
    flat: 'Db',
  })

  // Gb
  pitch = getPitchByValue(7)
  expect(pitch).toEqual({
    value: 7,
    natural: null,
    sharp: 'F#',
    flat: 'Gb',
  })
})

test('check getNextPitchByInterval and getPreviousPitchByInterval correctness', () => {
  let pitch
  const cPitch: Pitch = {
    value: 1,
    natural: 'C',
    sharp: 'B#',
    flat: null,
  }
  const bPitch: Pitch = {
    value: 12,
    natural: 'B',
    sharp: null,
    flat: 'Cb',
  }
  const aPitch: Pitch = {
    value: 10,
    natural: 'A',
    sharp: null,
    flat: null,
  }
  const dPitch: Pitch = {
    value: 3,
    natural: 'D',
    sharp: null,
    flat: null,
  }

  // Next: B to C
  pitch = getNextPitchByInterval(bPitch, 1)
  expect(pitch).toEqual(cPitch)

  // Next: A to D
  pitch = getNextPitchByInterval(aPitch, 5)
  expect(pitch).toEqual(dPitch)

  // Previous: C to B
  pitch = getPreviousPitchByInterval(cPitch, 1)
  expect(pitch).toEqual(bPitch)

  // Previous: A to D
  pitch = getPreviousPitchByInterval(dPitch, 5)
  expect(pitch).toEqual(aPitch)
})

test('check getInverseLabel correctness', () => {
  expect(getInverseLabel('sharp')).toEqual('flat')
  expect(getInverseLabel('flat')).toEqual('sharp')
})
