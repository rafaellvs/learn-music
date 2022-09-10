import { getAnswer } from './semitone-interval'

test('getAnswer correctness', () => {
  expect(getAnswer(1, 3, 'up')).toBe(2)
  expect(getAnswer(1, 3, 'down')).toBe(10)

  expect(getAnswer(5, 12, 'up')).toBe(7)
  expect(getAnswer(5, 12, 'down')).toBe(5)

  expect(getAnswer(8, 3, 'up')).toBe(7)
  expect(getAnswer(8, 3, 'down')).toBe(5)

  expect(getAnswer(7, 1, 'up')).toBe(6)
  expect(getAnswer(7, 1, 'down')).toBe(6)

  expect(getAnswer(12, 12, 'up')).toBe(12)
  expect(getAnswer(12, 12, 'down')).toBe(12)
})
