import React from 'react'
import * as Styled from './styles'
import Products from '../../components/Products/index'
import Total from '../../components/Total/index'

function Confirmation() {
  return (
    <Styled.Container>
      <h1>COMPRA EFETUADA COM SUCESSO</h1>

      <h2>PAGAMENTO</h2>
      <div>
        <h3>13109319239123</h3>
        <h3>JOSÉ DA SILVA</h3>
        <h3>05/2019</h3>
      </div>
      <Products />
      <Total />
    </Styled.Container>
  )
}

export default Confirmation
