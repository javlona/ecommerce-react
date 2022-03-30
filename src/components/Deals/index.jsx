import React from 'react'
import DealSty from './style'


function Deals() {
  return (
    <DealSty>
      <div className='deals__left'>
        left
      </div>
      <div className='deals__right'>
        <div className='deals__right--top'>
          <div className='deals__right--top--left'>top-left</div>
          <div className='deals__right--top--right'>top-right</div>
        </div>
        <div className='deals__right--bottom'>
          right-bottom
        </div>
      </div>
    </DealSty>
  )
}

export default Deals