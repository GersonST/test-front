import React from 'react'
import * as Styled from './styled'

import Products from '../../components/Products/index'
import Total from '../../components/Total/index'

function Cart() {
  return (
    <Styled.Container>
      <Styled.Produtos>Produtos</Styled.Produtos>
      <Products />
      <Total />
      <Styled.Button>
        <a href="/payment">Seguir para o Pagamento</a>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Cart
