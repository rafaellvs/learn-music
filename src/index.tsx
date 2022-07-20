import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as WebFont from 'webfontloader'

import GlobalStyles from 'src/theme/global-styles'

import App from 'src/components/App'

WebFont.load({
  google: {
    families: ['Fira Sans:300,800', 'Roboto Slab:300,400,800'],
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
