import React from "react";
import { Link } from "react-scroll";
import { Button } from "../button";
import { Banner } from "../banner/banner";
import "./header.scss";

export const Header = () => {
  return (
    <div id="click_home">
      <nav className="header">
        <div className="container">
          <div className="logo">
            <Link to="click_home">
              <img
                className="logo-image"
                src={require("../../images/logo.png")}
                alt=""
              />
              <span className="logo-title">Musicly</span>
            </Link>
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                to="click_collection"
                smooth={true}
                offset={-120}
                duration={800}
              >
                COLLECTIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="click_studio" smooth={true} offset={-80} duration={800}>
                STUDIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="click_testimonial"
                smooth={true}
                offset={-80}
                duration={800}
              >
                TESTIMONIAL
              </Link>
            </li>
            <li className="nav-item">
              <Link to="click_faq" smooth={true} offset={-80} duration={800}>
                FAQ
              </Link>
            </li>
          </ul>
          <Link to="click_contact" smooth={true} offset={-80} duration={800}>
            <Button text="Contact Us" />
          </Link>
        </div>
      </nav>
      <Banner />
    </div>
  );
};
