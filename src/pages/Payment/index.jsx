import React from 'react'
import Button from '../../components/Button'
import * as Styled from './styles'

import Total from '../../components/Total/index'

function Payment() {
  return (
    <Styled.Container>
      <h1>CARTÃO DE CRÉDITO</h1>
      <Styled.Form>
        <label htmlFor="">Número do cartão:</label>
        <input type="text" />
        <label htmlFor="">Número do Titular:</label>
        <input type="text" placeholder="Como no cartão" />
        <div>
          <label htmlFor="">Validade (mês/ano):</label>
          <input type="date" placeholder="__/____" />
          <label htmlFor="">CVV:</label>
          <input type="number" />
        </div>
      </Styled.Form>
      <Total />
      <Button text="FINALIZAR PEDIDO" url="confirmation" />
    </Styled.Container>
  )
}

export default Payment
