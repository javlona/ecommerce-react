import React from 'react'
import Container from './style'

function Input({title, type, name}) {
  return (
    <Container 
        name={name}
        type={type}
        placeholder={title}
        >
    </Container>
  )
}

export default Input