import styled from 'styled-components'

import { SemitoneIntervalQuestion } from 'src/types/Questions'

import theme from 'src/theme'

type ResultProps = {
  $result: SemitoneIntervalQuestion['result']
}

export const Container = styled.div`
  padding-top: 3rem;
`

export const TableContainer = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background: ${theme.colors.gray};
    border-radius: 10px;

    &-thumb {
      background: ${theme.colors.yellow};
      border-radius: 10px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    tr:nth-child(odd) {
      background: black;
    }

    td {
      padding: 0 1rem;
      text-align: left;
    }

    @media (max-width: 768px) {
      tr {
        td {
          display: block;
          text-align: center;

          &:first-child {
            padding-top: 1rem;
          }

          &:last-child {
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
`

export const Result = styled.span<ResultProps>`
  font-weight: bold;
  color: ${({ $result }) => $result ? theme.colors.success : theme.colors.error};
`

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: 2rem 2rem 2rem auto;
  grid-gap: 0.5rem;

  @media (max-width: 768px) {
    text-align: left;
    justify-content: center;
  }
`

export const IntervalGrid = styled.div`
  padding: 1rem 0;
`
