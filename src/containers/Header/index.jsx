import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch, BiCartAlt } from 'react-icons/bi'
import Button from '../../components/Button'
import HeaderSty from './style'

function Header() {
  const user = true

  return (
    <HeaderSty>
      <div className="header__top">
        <h3 className='header__top-msg'>Free Delivery</h3>
        <div className="header__top-links">
          {(user) ? <Link to={'/profile'}>My profile</Link> : <Link to={'/sign-in'}>Sign in</Link>}
          <div className='header__top-lang'>Language</div>
          <div className='header__top-currency'>USD</div>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav-logo">
          online store
        </div>
        <div className="header__nav-links">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT US</Link>
          <Link to='/shop'>SHOP</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>
        <div className="header__nav-actions">
          <form>
            <input className="header__input" type="search" placeholder="Search"/>
            <button className="header__search-button"><BiSearch /></button>
          </form>
          <Button title='Checkout' type='secondary'/>
        </div>
      </div>
    </HeaderSty>
  )
}

export default Header