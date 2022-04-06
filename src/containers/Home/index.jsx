import React from "react";
import Button from "../../components/Button";
import Deals from "../../components/Deals";
import { Wrapper } from "../../style";
import color from "../../utils/color";
import HomeSty from "./style";

function Home() {
  return (
    <>
      <HomeSty>
        <div className="home__hero">
          <Wrapper>
            <div className="home__heading">
              <h4 className="home__heading--small">TOP TRENDING</h4>
              <h1 className="home__heading--big">
                New Arriwal
                <br />
                Fashion
              </h1>
            </div>
            <Button title="DISCOVER NOW" type="transparent" />
          </Wrapper>
        </div>
        <Deals />
        <div className="features">
          <Wrapper display="flex">
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
                <h4 className="features__card--title">Free Shipping</h4>
                <p className="features__card--text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                <h4 className='features__card--title'>Money Back Guarantee</h4>
                <p className='features__card--text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                <h4 className='features__card--title'>24/7 Help Center</h4>
                <p className='features__card--text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </HomeSty>
    </>
  );
}

export default Home;
