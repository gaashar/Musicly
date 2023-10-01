import React from "react";
import "./footerBody.scss";

export const FooterBody = () => {
  return (
    <footer className="reachout">
      <img src={require("../../images/proBack_04.png")} className="bgImage" />
      <div className="container">
        <div className="contact-details">
          <div className="brand">
            <img src={require("../../images/logo.png")} />
            <h4 className="name">Musicly</h4>
          </div>
          <div className="contact">
            <div className="phone">
              <img src={require("../../images/phone.png")} />
              <div className="info">
                <h5>Phone</h5>
                <p>+41 - 654 - 763 -875</p>
              </div>
            </div>
            <div className="email">
              <img src={require("../../images/email.png")} />
              <div className="info">
                <h5>Email</h5>
                <p>hi@musiclystudio.co</p>
              </div>
            </div>
            <div className="studio-address">
              <img src={require("../../images/address.png")} />
              <div className="info">
                <h5>Studio</h5>
                <p>24, Guererro Street. UK - London (Studio 1) 24, </p>
                <p>Pink Triangle Park - London (Studio 2)</p>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="discord">
              <img src={require("../../images/discord.png")} />
            </div>
            <div className="instagram">
              <img src={require("../../images/instagram.png")} />
            </div>
            <div className="twitter">
              <img src={require("../../images/twitter.png")} />
            </div>
            <div className="facebook">
              <img src={require("../../images/facebook.png")} />
            </div>
          </div>
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
