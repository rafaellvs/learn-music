import { useState, useEffect } from 'react'

import { Note } from 'src/types/ChromaticScale'
import { DiatonicScaleQuestion } from 'src/types/Questions'
import { DiatonicScale } from 'src/types/DiatonicScales'

import { createMajorScale } from 'src/managers/diatonic-scales'

const useDiatonicScale = (diatonicScale: DiatonicScale) => {
  // Note scale resolver
  const getNoteScale = (): DiatonicScaleQuestion['scale'] => {
    switch (diatonicScale.name) {
      case 'Major':
        return createMajorScale().noteScale

      default:
        return createMajorScale().noteScale
    }
  }

  // State
  const [scale, setScale] = useState<DiatonicScaleQuestion['scale']>(getNoteScale())
  const [userAnswer, setUserAnswer] = useState<DiatonicScaleQuestion['userAnswer']>([])
  const [answerFeedback, setAnswerFeedback] = useState<DiatonicScaleQuestion['answerFeedback']>({ isCorrect: false, wrongNotes: [] })

  // Button handlers
  const handleAddNote = (note: Note): void => {
    userAnswer.length < 8 &&
    setUserAnswer(state => [...state, note])
  }

  const handleRemoveNote = (index: number): void => {
    setUserAnswer(state => {
      const newAnswer = [...state]
      newAnswer.splice(index, 1)

      return newAnswer
    })
  }

  const clearAnswer = (): void => {
    setUserAnswer([])
    setAnswerFeedback({ isCorrect: false, wrongNotes: [] })
  }

  const reloadScale = (): void => {
    const newScale = createMajorScale().noteScale
    setScale(newScale)
    clearAnswer()
  }

  // Answer verification
  const isUserAnswerCorrect = (): boolean =>
    userAnswer.every((userNote, index) => userNote === scale[index])

  const getWrongNotes = (): Array<Note> =>
    userAnswer.filter((userNote, index) => userNote !== scale[index])

  useEffect(() => {
    if (userAnswer.length === 8) {
      isUserAnswerCorrect()
        ? setAnswerFeedback({ isCorrect: true, wrongNotes: [] })
        : setAnswerFeedback({ isCorrect: false, wrongNotes: getWrongNotes() })
    }
  }, [userAnswer])

  return {
    scale,
    setScale,
    userAnswer,
    setUserAnswer,
    answerFeedback,
    setAnswerFeedback,
    handleAddNote,
    handleRemoveNote,
    clearAnswer,
    reloadScale,
  }
}

export default useDiatonicScale
