import React from 'react'
import { screen, render } from '@testing-library/react'

import { Note } from 'src/types/ChromaticScale'

import AnswerFeedback from '.'

test('test correct answer', () => {
  let answerFeedback

  answerFeedback = { isCorrect: true, wrongNotes: [] }
  render(
    <AnswerFeedback answerFeedback={answerFeedback}/>
  )
  expect(screen.getByText('Correct!')).toBeInTheDocument()

  // If there are no wrong notes, the answer is correct
  answerFeedback = { isCorrect: false, wrongNotes: [] }
  render(
    <AnswerFeedback answerFeedback={answerFeedback}/>
  )
  expect(screen.getByText('Correct!')).toBeInTheDocument()
})

test('wrong notes are showing correctly', () => {
  const wrongNotes: Array<Note> = ['C', 'E', 'F']
  const answerFeedback = { isCorrect: false, wrongNotes }

  render(
    <AnswerFeedback answerFeedback={answerFeedback} />
  )
  expect(screen.getByText('C')).toBeInTheDocument()
  expect(screen.getByText('E')).toBeInTheDocument()
  expect(screen.getByText('F')).toBeInTheDocument()
})
