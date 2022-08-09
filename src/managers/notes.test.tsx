import { getSemitonesInterval } from './notes'

test('check getSemitonesInterval accuracy', () => {
  expect(
    getSemitonesInterval('C', 'C', 'up')
  ).toBe(12)

  expect(
    getSemitonesInterval('C', 'G', 'up')
  ).toBe(7)

  expect(
    getSemitonesInterval('B', 'C', 'up')
  ).toBe(1)

  expect(
    getSemitonesInterval('E', 'F', 'down')
  ).toBe(11)

  expect(
    getSemitonesInterval('A', 'D', 'down')
  ).toBe(7)

  expect(
    getSemitonesInterval('G', 'F', 'down')
  ).toBe(2)
})
