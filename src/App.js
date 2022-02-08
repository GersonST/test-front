import React from 'react'
import * as Styled from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './services/routes'

const App = () => (
  <Styled.Container>
    <Header />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </Styled.Container>
)

export default App
