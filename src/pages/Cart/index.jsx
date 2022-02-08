import React from 'react'
import * as Styled from './styled'

function Cart() {
  return (
    <Styled.Container>
      <Styled.Produtos>Produtos</Styled.Produtos>
      <Styled.ContainerProduto>
        <ul>
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
        </ul>
      </Styled.ContainerProduto>
      <Styled.ContainerTotal>
        <h2>Produtos</h2>
        <h2>Frete</h2>
        <h2>Desconto</h2>
        <h2>Total</h2>
      </Styled.ContainerTotal>
      <Styled.Button>
        <a href="/payment">Seguir para o Pagamento</a>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Cart
