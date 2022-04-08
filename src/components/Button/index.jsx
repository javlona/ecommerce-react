import React from 'react'
import Container from './style'

function Button({title, type, icon, data, onClick}) {
  return (
    <Container type={type} onClick={ onClick }>
      {icon && <span className='btn__icon'>{ icon }</span>}
      {data && <span className='btn__data'>{ data }</span>}
      {title}
    </Container>
  )
}

export default Button