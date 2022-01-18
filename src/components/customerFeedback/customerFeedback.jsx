import React from "react";
import "./customerFeedback.scss";

export const CustomerFeedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <img src={require("../../images/quote.png")} className="quote" />
        <div className="title">
          <h2>
            What our customers <span className="highlight">say</span>
          </h2>
          <p>
            The satisfaction of our customers is our priority, see how they give
            their testimonials to our services
          </p>
        </div>
        <div className="customers">
          <div className="list">
            <div className="customer">
              <div className="rating">
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
              </div>
              <div className="review">
                Musicly is the best place to rent a variety of musical
                instruments. Absolutely love it! You should try it too.
              </div>
              <div className="name">
                <div className="image_holder">
                  <img src={require("../../images/customer_01.png")} />
                </div>

                <div className="details">
                  <h4>Roman Nifty</h4>
                  <p>Musician</p>
                </div>
              </div>
            </div>
            <div className="customer">
              <div className="rating">
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
              </div>
              <div className="review">
                Musicly is the best place to rent a variety of musical
                instruments. Absolutely love it! You should try it too.
              </div>
              <div className="name">
                <div className="image_holder">
                  <img src={require("../../images/customer_02.png")} />
                </div>
                <div className="details">
                  <h4>Roman Nifty</h4>
                  <p>Musician</p>
                </div>
              </div>
            </div>
            <div className="customer">
              <div className="rating">
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
                <img src={require("../../images/star.png")} />
              </div>
              <div className="review">
                Musicly is the best place to rent a variety of musical
                instruments. Absolutely love it! You should try it too.
              </div>
              <div className="name">
                <div className="image_holder">
                  <img src={require("../../images/customer_03.png")} />
                </div>
                <div className="details">
                  <h4>Roman Nifty</h4>
                  <p>Musician</p>
                </div>
              </div>
            </div>
          </div>
          <div className="scroller">
            <div className="items">
              <div className="item">
                <img src={require("../../images/rightArrow.png")} />
              </div>
              <div className="space"></div>
              <div className="item">
                <img src={require("../../images/leftArrow.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
