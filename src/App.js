import React from 'react'
import * as Styled from './styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './services/routes'
import { BreakpointProvider } from 'react-socks'

const App = () => (
  <BreakpointProvider>
    <Styled.Container>
      <Header />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Styled.Container>
  </BreakpointProvider>
)

export default App
