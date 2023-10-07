import React from "react";
import "./banner.scss";
import { Button } from "../button";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="image-bg-container">
          <img
            className="background"
            src={require("../../images/proBack.png")}
            alt=""
          />
          <img
            className="man-img"
            src={require("../../images/Man.png")}
            alt=""
          />
        </div>
        <section className="description">
          <div className="description-container">
            <div className="main">Let's create beautiful music with us</div>
            <div className="inner">
              <p>
                We are the best musical instrument rental place in London. We
                provide a variety of musical instruments that you can rent
                anytime and anywhere 😍
              </p>
              {/* <img src={require("../../images/drum.png")}></img> */}
            </div>
            <div className="search-product-card">
              <div className="product-detail">
                <h5>Instrumental Music</h5>
                <h4>Guitar</h4>
              </div>
              <div className="product-detail">
                <h5>Price Range</h5>
                <h4>$150-$400</h4>
              </div>
              <div className="product-detail">
                <h5>Date</h5>
                <h4>11/01/2022</h4>
              </div>
              <Button text="Search" searchClass />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
