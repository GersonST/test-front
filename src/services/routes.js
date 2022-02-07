import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import Confirmation from '../pages/Confirmation'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}

export default Rotas
