import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from 'src/components/NavBar'

import Page404 from 'src/pages/404'
import HomePage from 'src/pages/Home'
import SemitoneIntervalPage from 'src/pages/SemitoneInterval'

import { Container, MainContent } from './styled'

const App = () => {
  return (
    <Container>
      <NavBar />

      <MainContent>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<HomePage />} />
          <Route path='semitone-interval' element={<SemitoneIntervalPage />} />
        </Routes>
      </MainContent>
    </Container>
  )
}

export default App
