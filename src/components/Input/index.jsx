import React from 'react'
import Container from './style'

function Input({placeholder, type, name, onChange}) {
  return (
    <Container 
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        >
    </Container>
  )
}

export default Input