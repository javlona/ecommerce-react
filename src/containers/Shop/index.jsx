import React from "react";
import { Wrapper } from "../../style";
import ShopSty from "./style";
import { Breadcrumb } from "antd";
import { Card } from "antd";
import suit from "../../assets/suit.jpg";
import { useSelector } from "react-redux";
import Button from "../../components/Button";

function Shop() {
  const { Meta } = Card;
  const user = useSelector(state => state.auth.token)

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
          <div className="shop__category">
            <h4>Shop by categories</h4>
            <ul className="shop__cats">
              <li>&rarr; Men</li>
              <li>&rarr; Women</li>
              <li>&rarr; Kids</li>
              <li>&rarr; Trending</li>
            </ul>
          </div>
          <div className="shop_cards">
            <div className="shop__action">
              {user && <Button type="secondary">Add product</Button>}
            </div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={suit}
                />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={suit}
                />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={suit}
                />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={suit}
                />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src={suit}
                />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </Wrapper>
    </ShopSty>
  );
}

export default Shop;
