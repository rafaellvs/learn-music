import { getInverseLabel } from './chromatic-scale'

test('check getInverseLabel correctness', () => {
  expect(getInverseLabel('sharp')).toBe('flat')
  expect(getInverseLabel('flat')).toBe('sharp')
})
