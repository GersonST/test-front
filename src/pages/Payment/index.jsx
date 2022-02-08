import React from 'react'
import * as Styled from './styles'

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
      <Styled.ContainerTotal>
        <h2>PRODUTOS</h2>
        <h2>FRETE</h2>
        <h2>DESCONTO</h2>
        <h2>TOTAL</h2>
      </Styled.ContainerTotal>
      <Styled.Button>
        <a href="/confirmation">FINALIZAR O PEDIDO</a>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Payment
