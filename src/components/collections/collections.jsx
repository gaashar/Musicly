import React from "react";
import "./collections.scss";
import { Button } from "../button";

export const Collections = () => {
  return (
    <section className="collections">
      <div className="container">
        <div className="title">
          Our best <span className="highlight">collections</span>
          <img
            src={require("../../images/Underline_02.png")}
            className="underline"
          ></img>
        </div>
        <p className="description">
          We always prepare various items with the best quality, take a look at
          the various best collections we have for you, all of our collections
          are the best in their class
        </p>
        <Button text="See more items" seeMoreClass />
      </div>
      <div className="instruments">
        <div className="instrument">
          <img src={require("../../images/guitar.png")}></img>
        </div>
        <div className="instrument">
          <img src={require("../../images/guitar_keyboard.png")}></img>
        </div>
        <div className="instrument">
          <img src={require("../../images/snare.png")}></img>
        </div>
        <div className="instrument">
          <img src={require("../../images/speaker.png")}></img>
        </div>
      </div>
    </section>
  );
};
