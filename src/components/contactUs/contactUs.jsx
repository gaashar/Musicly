import React from "react";
import { Button } from "../button";
import { FooterBody } from "../footerBody/footerBody";
import "./contactUs.scss";

export const ContactUs = () => {
  return (
    <>
      <section className="contactUs">
        <div className="container">
          <img
            src={require("../../images/guitar_02.png")}
            className="image_1"
          />
          <img src={require("../../images/drum_02.png")} className="image_2" />
          <div className="instrument">
            <div className="description">
              <h3>Let's choose a musical instrument that you like right now</h3>
              <p>
                No need to hesitate anymore to determine where you will rent
                various musical instruments with the best service, and the most
                complete collection. we are the only one you should go to
              </p>
              <Button text="Contact Us" contactUsClass />
            </div>
          </div>
        </div>
      </section>
      <FooterBody />
    </>
  );
};
