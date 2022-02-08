import React, { useState, useEffect } from 'react'

import * as Styled from './styles'
import axios from 'axios'

function Total() {
  const [price, setPrice] = useState('')

  useEffect(() => {
    const GetApi = async () => {
      await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((response) => {
        console.log(response.data)

        setPrice(response.data)
      })
    }
    GetApi()
  }, [])
  return (
    <Styled.ContainerTotal>
      <div>
        <h2>PRODUTOS</h2>
        <h2>R$ {price.subTotal}</h2>
      </div>
      <div>
        <h2>FRETE</h2>
        <h2>R$ {price.shippingTotal}</h2>
      </div>
      <div>
        <span>DESCONTO</span>
        <h2>R$ - {price.discount}</h2>
      </div>

      <div>
        <h2>TOTAL</h2>
        <h2>R$ {price.total}</h2>
      </div>
    </Styled.ContainerTotal>
  )
}
export default Total
