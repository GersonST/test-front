import React from 'react'
import * as Styled from './styles'

function Confirmation() {
  return (
    <Styled.Container>
      <h1>COMPRA EFETUADA COM SUCESSO</h1>
      <Styled.ContainerProduto>
        <h2>PAGAMENTO</h2>
        <div>
          <h3>13109319239123</h3>
          <h3>JOSÉ DA SILVA</h3>
          <h3>05/2019</h3>
        </div>
        <h2>PRODUTOS</h2>
        <div>
          <ul>
            <li>Produto 1</li>
            <li>Produto 2</li>
            <li>Produto 3</li>
          </ul>
        </div>
        <div>
          <h1>PRODUTOS</h1>
          <h1>FRETE</h1>
          <h1>DESCONTO</h1>
          <h1>TOTAL</h1>
        </div>
      </Styled.ContainerProduto>
    </Styled.Container>
  )
}

export default Confirmation
