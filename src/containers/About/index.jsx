import React from 'react'
import AboutSty from './style'
import storePic from '../../assets/store.png'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../style'

function About() {
  return (
    <AboutSty>
      <Wrapper>
        <div className="about_about">
          <div className="about__pic">
            <img src={ storePic } />
          </div>
          <div className="about__text">
            <h4 className="about__title">Online Store</h4>
            <h2 className="about__about">About Us</h2>
            <div className="about__text-content">
              <p>We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with.</p>
              <Link to='./'>Learn More</Link>
            </div>  
          </div>
        </div>
      </Wrapper>
    </AboutSty>
  )
}

export default About