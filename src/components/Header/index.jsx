import React from 'react'
import * as Styled from './styles'

function Header() {
  return (
    <Styled.Header>
      <a href="/">SACOLA </a>
      <a href="/payment"> PAGAMENTO </a>
      <a href="/confirmation"> CONFIRMAÇÃO</a>
    </Styled.Header>
  )
}

export default Header
