import React from "react";
import { Button } from "../button";
import { Banner } from "../banner/banner";
import "./header.scss";

export const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="container">
          <div>
            <img
              className="logo-image"
              src={require("../../images/logo.png")}
              alt=""
            />
            <span className="logo-title">Musicly</span>
          </div>
          <ul className="nav-items">
            <li className="nav-item">COLLECTIONS</li>
            <li className="nav-item">STUDIO</li>
            <li className="nav-item">TESTIMONIAL</li>
            <li className="nav-item">FAQ</li>
          </ul>
          <Button text="Contact Us" />
        </div>
      </nav>
      <Banner />
    </div>
  );
};
