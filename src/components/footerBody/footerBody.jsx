import React from "react";
import { SocialMedia } from "./socialMedia/socialMedia";
import "./footerBody.scss";

export const FooterBody = () => {
  return (
    <footer className="reachout">
      <img
        src={require("../../images/proBack_04.png")}
        className="bgImage"
        alt=""
      />
      <div className="container">
        <div className="contact-details">
          <div className="brand">
            <img src={require("../../images/logo.png")} alt="" />
            <h4 className="name">Musicly</h4>
          </div>
          <div className="contact">
            <div className="phone mobile-view">
              <div className="image-container">
                <img src={require("../../images/phone.png")} alt="" />
              </div>
              <div className="info">
                <h5>Phone</h5>
                <p>+41 - 654 - 763 -875</p>
              </div>
            </div>
            <div className="email mobile-view">
              <div className="image-container">
                <img src={require("../../images/email.png")} alt="" />
              </div>
              <div className="info">
                <h5>Email</h5>
                <p>hi@musiclystudio.co</p>
              </div>
            </div>
            <div className="studio-address mobile-view">
              <div className="image-container">
                <img src={require("../../images/address.png")} alt="" />
              </div>
              <div className="info">
                <h5>Studio</h5>
                <p>
                  <span>24, Guererro Street. UK - London (Studio 1) 24, </span>
                  <span>Pink Triangle Park - London (Studio 2)</span>
                </p>
              </div>
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className="copyright-content">
          <p>Copyright © 2021 Musicly - All Right Reserved</p>
          <div className="policy-content">
            <p className="policy">Terms of conditions</p>
            <p className="policy">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
