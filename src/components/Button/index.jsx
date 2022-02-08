import React from 'react'

import * as Styled from './styles'

function Button({ text, url }) {
  return (
    <Styled.Button>
      <a href={`/${url}`}>{text}</a>
    </Styled.Button>
  )
}

export default Button
