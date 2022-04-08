import React from 'react'
import { Wrapper } from '../../style'
import ShopSty from './style'
import { Breadcrumb } from 'antd';

function Shop() {
  return (
    <ShopSty>
      <Wrapper>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className="shop__content">
          <div className='shop__category'>
            <h4>Shop by categories</h4>
            <ul className='shop__cats'>
              <li>&rarr; Men</li>
              <li>&rarr; Women</li>
              <li>&rarr; Kids</li>
              <li>&rarr; Trending</li>
            </ul>
          </div>
        <div className='shop_cards'>
          
        </div>
        </div>
      </Wrapper>
    </ShopSty>
  )
}

export default Shop