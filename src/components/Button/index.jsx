import React from 'react'
import Container from './style'

function Button({title, type, icon, data}) {
  return (
    <Container type={type}>
      {icon && <span className='btn__icon'>{ icon }</span>}
      {data && <span className='btn__data'>{ data }</span>}
      {title}
    </Container>
  )
}

export default Button