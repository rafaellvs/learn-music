type Direction = 'up' | 'down'

type Note =
  'C' | 'C#' | 'Cb' |
  'D' | 'D#' | 'Db' |
  'E' | 'E#' | 'Eb' |
  'F' | 'F#' | 'Fb' |
  'G' | 'G#' | 'Gb' |
  'A' | 'A#' | 'Ab' |
  'B' | 'B#' | 'Bb'

type PitchLabel = 'natural' | 'sharp' | 'flat'

type Pitch = {
  value: number
  natural: Note | null
  sharp: Note | null
  flat: Note | null
}

type ChromaticScale = Readonly<Array<Pitch>>

type Interval =
  | 'Minor 2nd'
  | 'Major 2nd'
  | 'Minor 3rd'
  | 'Major 3rd'
  | 'Perfect 4th'
  | 'Tritone'
  | 'Perfect 5th'
  | 'Minor 6th'
  | 'Major 6th'
  | 'Minor 7th'
  | 'Major 7th'
  | 'Octave'

export type {
  Direction,
  Note,
  PitchLabel,
  Pitch,
  ChromaticScale,
  Interval,
}
