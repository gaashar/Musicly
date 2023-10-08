import React from "react";
import "./productDetails.scss";

export const ProductDetails = () => {
  return (
    <section className="product-details-card">
      <div className="container">
        <div className="pd-title">
          <span className="first-word">Why</span> choose us?
        </div>
        <p className="pd-description">
          We have various advantages and conveniences that we offer you as the
          best musical instrument rental place and we make sure you are happy
          for it
        </p>
        <div className="card-group">
          <div className="card">
            <img src={require("../../images/book.png")} alt=""></img>
            <h4>Book and cancel anytime</h4>
            <p>
              When you rent a musical instrument in our shop, you can decide
              when you want to rent it and cancel it at any time
            </p>
          </div>
          <div className="card">
            <img src={require("../../images/rates.png")} alt=""></img>
            <h4>Very low rental rates</h4>
            <p>
              We have a variety of rental items with good quality but believe
              me, even so it will not drain your pocket
            </p>
          </div>
          <div className="card">
            <img src={require("../../images/shipping.png")} alt=""></img>
            <h4>Free shipping anywhere</h4>
            <p>
              If you have made a rental but you can't pick up your item at our
              shop, don't worry, we will deliver it to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
