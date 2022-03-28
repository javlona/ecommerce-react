import React from 'react'
import Button from '../../components/Button'
import HomeSty from './style'

function Home() {
  return (
    <HomeSty>
        <div className="home__heading">
          <h4 className='home__heading--small'>TOP TRENDING</h4>
          <h1 className='home__heading--big'>New Arriwal<br />Fashion</h1>
        </div>
        <Button title='DISCOVER NOW' type='transparent'/>
    </HomeSty>
  )
}

export default Home