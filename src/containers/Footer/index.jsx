import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style'
import FooterSty from './style'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'

function Footer() {
  return (
    <FooterSty>
      <Wrapper>
        <ul className="footer__links">
          <li className="footer__links-about">
            <h4 className='footer__title'>About us</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, tempore.</p>
            <div className="footer__follow">
              <h4 className='footer__title'>Follow us</h4>
              <ul className="footer__follow-icons">
                <Link to='/'><FaFacebookF /></Link>
                <Link to='/'><SiInstagram /></Link>
                <Link to='/'><FaLinkedinIn /></Link>
                <Link to='/'><FaTwitter /></Link>
              </ul>
            </div>
          </li>
          <li className="footer__links-info">
            <h4 className='footer__title'>Information</h4>
            <Link to='/profile'>Profile</Link>
            <Link to='/'>About us</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Address</Link>
            <Link to='/'>Return Policy</Link>
          </li>
          <li className="footer__links-returns">
            <h4 className='footer__title'>Returns</h4>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Size Guide</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sell with us</Link>
          </li>
          <li className="footer__links-contact">
            <h4 className='footer__title'>Get in touch</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio, eius officia quis dolor omnis.</p>
          </li>
        </ul>
        <div className="footer__copyright">

        </div>
      </Wrapper>
    </FooterSty>
  )
}

export default Footer