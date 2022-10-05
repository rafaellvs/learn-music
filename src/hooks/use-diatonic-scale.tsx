import { useState, useEffect } from 'react'

import { Note } from 'src/types/ChromaticScale'
import { DiatonicScaleQuestion } from 'src/types/Questions'

import { createMajorScale } from 'src/managers/diatonic-scales'

const useDiatonicScale = () => {
  const [majorScale, setMajorScale] = useState<DiatonicScaleQuestion['majorScale']>(createMajorScale().noteScale)
  const [userAnswer, setUserAnswer] = useState<DiatonicScaleQuestion['userAnswer']>([])
  const [answerFeedback, setAnswerFeedback] = useState<DiatonicScaleQuestion['answerFeedback']>({ isCorrect: false, wrongNotes: [] })

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
    setMajorScale(newScale)
    clearAnswer()
  }

  const isUserAnswerCorrect = (): boolean =>
    userAnswer.every((userNote, index) => userNote === majorScale[index])

  const getWrongNotes = (): Array<Note> =>
    userAnswer.filter((userNote, index) => userNote !== majorScale[index])

  useEffect(() => {
    if (userAnswer.length === 8) {
      isUserAnswerCorrect()
        ? setAnswerFeedback({ isCorrect: true, wrongNotes: [] })
        : setAnswerFeedback({ isCorrect: false, wrongNotes: getWrongNotes() })
    }
  }, [userAnswer])

  return {
    majorScale,
    setMajorScale,
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
