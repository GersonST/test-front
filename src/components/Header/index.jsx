import React from 'react'
import * as Styled from './styles'

function Header() {
  return (
    <Styled.Header>
      <Styled.ItensA href="/">SACOLA </Styled.ItensA>
      <Styled.ItensA href="/payment"> PAGAMENTO </Styled.ItensA>
      <Styled.ItensA href="/confirmation"> CONFIRMAÇÃO</Styled.ItensA>
    </Styled.Header>
  )
}

export default Header
