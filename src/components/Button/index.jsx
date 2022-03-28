import React from 'react'
import Container from './style'

function Button({title, type}) {
  return (
    <Container type={type}>
      {title}
    </Container>
  )
}

export default Button