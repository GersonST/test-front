import React from 'react'
import './App.css'
import Cart from './pages/Cart'
import Header from './components/Header'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

const App = () => (
  <div className="App">
    <Header />
    <Cart />
    <Payment />
    <Confirmation />
  </div>
)

export default App
