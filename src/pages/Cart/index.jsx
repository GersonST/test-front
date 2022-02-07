import React from 'react'

function Cart() {
  return (
    <div>
      <h1>Produtos</h1>
      <div>
        <ul>
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
        </ul>
      </div>
      <div>
        <h2>Produtos</h2>
        <h2>Frete</h2>
        <h2>Desconto</h2>
        <h2>Total</h2>
      </div>
      <button>
        <a href="/payment">Seguir para o Pagamento</a>
      </button>
    </div>
  )
}

export default Cart
