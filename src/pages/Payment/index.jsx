import React from 'react'

function Payment() {
  return (
    <div>
      <h1>CARTÃO DE CRÉDITO</h1>
      <form>
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
      </form>
      <div>
        <h2>PRODUTOS</h2>
        <h2>FRETE</h2>
        <h2>DESCONTO</h2>
        <h2>TOTAL</h2>
      </div>
      <button>FINALIZAR O PEDIDO</button>
    </div>
  )
}

export default Payment
