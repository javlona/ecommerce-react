import React from 'react'
import Container from './style'

function Button({title, type, icon, data}) {
  return (
    <Container type={type}>
      <span className='btn__icon'>{ icon && icon }</span>
      <span className='btn__data'>{ data && data }</span>
      {title}
    </Container>
  )
}

export default Button