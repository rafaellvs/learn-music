import React from 'react'
import { screen, render } from '@testing-library/react'

import NoteSelection from '.'

test('check if all notes are rendered correctly', () => {
  render(
    <NoteSelection
      handleAddNote={() => {}}
      handleRemoveNote={() => {}}
      userAnswer={[]}
    />)

  expect(screen.getByText('C')).toBeInTheDocument()
  expect(screen.getByText('C#')).toBeInTheDocument()
  expect(screen.getByText('Cb')).toBeInTheDocument()

  expect(screen.getByText('D')).toBeInTheDocument()
  expect(screen.getByText('D#')).toBeInTheDocument()
  expect(screen.getByText('Db')).toBeInTheDocument()

  expect(screen.getByText('E')).toBeInTheDocument()
  expect(screen.getByText('E#')).toBeInTheDocument()
  expect(screen.getByText('Eb')).toBeInTheDocument()

  expect(screen.getByText('F')).toBeInTheDocument()
  expect(screen.getByText('F#')).toBeInTheDocument()
  expect(screen.getByText('Fb')).toBeInTheDocument()

  expect(screen.getByText('G')).toBeInTheDocument()
  expect(screen.getByText('G#')).toBeInTheDocument()
  expect(screen.getByText('Gb')).toBeInTheDocument()

  expect(screen.getByText('A')).toBeInTheDocument()
  expect(screen.getByText('A#')).toBeInTheDocument()
  expect(screen.getByText('Ab')).toBeInTheDocument()

  expect(screen.getByText('B')).toBeInTheDocument()
  expect(screen.getByText('B#')).toBeInTheDocument()
  expect(screen.getByText('Bb')).toBeInTheDocument()
})
