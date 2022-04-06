import React from 'react'
import { Wrapper } from "../../style";
import ArrivalsSty from './style';
import item from '../../assets/1.jpg'
import { AiOutlineHeart } from 'react-icons/ai'


function Arrivals() {
  return (
    <ArrivalsSty>
      <Wrapper>
        <h3 className="arrivals__title">New Arrivals</h3>
        <div>
          <div className="arrivals__tab">
            <ul className="arrivals__tab--cats">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="arrivals__cards">
            <div className="arrivals__card">
              <img className="card__img" src={item} alt='product' />
              <div className="card__content">
                <div className="card__title-like">
                  <p className="card__title">Sample Product</p>
                  <button className='card__like'><AiOutlineHeart /></button>
                </div>
                <p className='card__price'>$49</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </ArrivalsSty>
  )
}

export default Arrivals