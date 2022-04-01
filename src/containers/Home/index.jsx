import React from "react";
import Button from "../../components/Button";
import Deals from "../../components/Deals";
import { Wrapper } from "../../style";
import HomeSty from "./style";

function Home() {
  return (
    <Wrapper>
      <HomeSty>
        <div className="home__heading">
          <h4 className="home__heading--small">TOP TRENDING</h4>
          <h1 className="home__heading--big">
            New Arriwal
            <br />
            Fashion
          </h1>
        </div>
        <Button title="DISCOVER NOW" type="transparent" />
      </HomeSty>
      <Deals />
      <div className="features">
        <div className="features__card">
          <div className="features__card-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <path
                id="Path_75"
                data-name="Path 75"
                d="M0,0H120V120H0Z"
                fill="#b2b2b2"
              />
            </svg>
          </div>
          <div className="features__card-txt">
            <h4>Free Shipping</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="features__card">
          <div className="features__card-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <path
                id="Path_81"
                data-name="Path 81"
                d="M0,0H120V120H0Z"
                fill="#b2b2b2"
              />
            </svg>
          </div>
          <div className="features__card-txt">
            <h4>Money Back Guarantee</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="features__card">
          <div className="features__card-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <path
                id="Path_82"
                data-name="Path 82"
                d="M0,0H120V120H0Z"
                fill="#b2b2b2"
              />
            </svg>
          </div>
          <div className="features__card-txt">
            <h4>24/7 Help Center</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
