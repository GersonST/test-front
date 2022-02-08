import React from 'react'
import * as Styled from './styled'

import Products from '../../components/Products/index'
import Total from '../../components/Total/index'
import Button from '../../components/Button'

function Cart() {
  return (
    <Styled.Container>
      <Styled.Produtos>Produtos</Styled.Produtos>
      <Products />
      <Total />
      <Button text="IR PARA O PAGAMENTO" url="payment" />
    </Styled.Container>
  )
}

export default Cart
