import React from 'react'
import { Breakpoint } from 'react-socks'
import * as Styled from './styles'

function Header() {
  return (
    <>
      <Breakpoint large up>
        <Styled.HeaderLarge>
          <a href="/">SACOLA </a>
          <a href="/payment"> PAGAMENTO </a>
          <a href="/confirmation"> CONFIRMAÇÃO</a>
        </Styled.HeaderLarge>
      </Breakpoint>
      <Breakpoint small down>
        <Styled.HeaderSmall>
          <a href="/">SACOLA </a>
          <a href="/payment"> PAGAMENTO </a>
          <a href="/confirmation"> CONFIRMAÇÃO</a>
        </Styled.HeaderSmall>
      </Breakpoint>
      <Breakpoint medium only>
        <Styled.HeaderLarge>
          <a href="/">SACOLA </a>
          <a href="/payment"> PAGAMENTO </a>
          <a href="/confirmation"> CONFIRMAÇÃO</a>
        </Styled.HeaderLarge>
      </Breakpoint>
    </>
  )
}

export default Header
