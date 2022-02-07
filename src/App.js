import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './services/routes'

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </div>
)

export default App
