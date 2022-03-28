import React from 'react'
import Container from './style'

function Input({placeholder, type, name}) {
  return (
    <Container 
        name={name}
        type={type}
        placeholder={placeholder}
        >
    </Container>
  )
}

export default Input