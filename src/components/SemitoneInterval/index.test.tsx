import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SemitoneInterval from '.'

test('check if there are 12 answer buttons', () => {
  render(<SemitoneInterval />)

  const answerButtons = screen.getAllByRole('button')
  expect(answerButtons).toHaveLength(12)
})

test('check if question log starts empty', () => {
  render(<SemitoneInterval />)

  const logEntries = screen.queryAllByRole('row')
  expect(logEntries).toHaveLength(0)
})

test('check question log length', () => {
  render(<SemitoneInterval />)

  let logEntries
  const answerButtons = screen.getAllByRole('button')

  userEvent.click(answerButtons[0])
  logEntries = screen.getAllByRole('row')
  expect(logEntries).toHaveLength(1)

  userEvent.click(answerButtons[1])
  logEntries = screen.getAllByRole('row')
  expect(logEntries).toHaveLength(2)
})
