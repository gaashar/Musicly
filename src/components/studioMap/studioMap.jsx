import React from "react";
import { Button } from "../button";
import "./studioMap.scss";

export const StudioMap = () => {
  return (
    <section className="studio">
      <img
        src={require("../../images/proBack_03.png")}
        className="proback"
        alt=""
      ></img>
      <div className="container">
        <div className="title">
          <h2>
            Visit our <span className="highlight">studio</span>
          </h2>
          <p className="details">
            Visit our studio to choose the musical instrument you want, we will
            be very happy if you come to our studio and see the various
            collections we have
          </p>
        </div>
        <div className="map-section">
          <img
            className="mapBg"
            src={require("../../images/map.png")}
            alt=""
          ></img>
          <img
            className="arrow1"
            src={require("../../images/Arrow_01.png")}
            alt=""
          ></img>
          <img
            className="arrow2"
            src={require("../../images/Arrow_09.png")}
            alt=""
          ></img>
          <div className="map-card card-position_1">
            <img
              src={require("../../images/address_2.png")}
              className="studio-image"
              alt=""
            ></img>
            <h4>Musicly Studio - Studio 2</h4>
            <p>24, Pink Triangle Park - London</p>
            <Button text="Get Direction" getDirectionClass />
          </div>
          <div className="map-card card-position_2">
            <img
              src={require("../../images/address_1.png")}
              className="studio-image"
              alt=""
            ></img>
            <h4>Musicly Studio - Studio 1</h4>
            <p>24, Guererro Street. UK - London</p>
            <Button text="Get Direction" getDirectionClass />
          </div>
        </div>
      </div>
    </section>
  );
};
