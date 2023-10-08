import React, { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "../button";
import { Banner } from "../banner/banner";
import { SocialMedia } from "../footerBody/socialMedia/socialMedia";
import "./header.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("🚀 ~ file: index.jsx:10 ~ Header ~ isMenuOpen:", isMenuOpen);

  const toggleMenu = () => {
    console.log(
      "🚀 ~ file: index.jsx:15 ~ toggleMenu ~ toggleMenu:",
      toggleMenu
    );
    setIsMenuOpen(!isMenuOpen);
  };

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
          <div
            className={isMenuOpen ? "menu-open" : "menu-close"}
            onClick={toggleMenu}
          >
            <ul className="nav-items">
              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  to="click_collection"
                  smooth={true}
                  offset={-120}
                  duration={800}
                  onClick={toggleMenu}
                >
                  COLLECTIONS
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  to="click_studio"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={toggleMenu}
                >
                  STUDIO
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  to="click_testimonial"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={toggleMenu}
                >
                  TESTIMONIAL
                </Link>
              </li>
              <li className="nav-item" onClick={toggleMenu}>
                <Link
                  to="click_faq"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  onClick={toggleMenu}
                >
                  FAQ
                </Link>
              </li>
            </ul>
            <Link
              className="contact-link"
              to="click_contact"
              smooth={true}
              offset={-80}
              duration={800}
              onClick={toggleMenu}
            >
              <Button text="Contact Us" />
            </Link>
            <SocialMedia />
          </div>
          <div
            className={
              isMenuOpen ? "hamburger-menu show-menu" : "hamburger-menu"
            }
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      <Banner />
    </div>
  );
};
