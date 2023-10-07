import React from "react";
import "./collections.scss";
import { Button } from "../button";
import { InstrumentBanner } from "./InstrumentBanner";
import { instruments } from "./instruments";

export const Collections = () => {
  return (
    <section id="click_collection" className="collections">
      <div className="container">
        <div className="title">
          Our best <span className="highlight">collections</span>
          <img
            src={require("../../images/Underline_02.png")}
            className="underline"
            alt=""
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
        {instruments.map(({ key, image, name, quantity }) => {
          return (
            <div className="instrument" key={key}>
              <img src={image} alt={key}></img>
              <InstrumentBanner name={name} quantity={quantity} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
