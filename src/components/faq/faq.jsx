import React, { useState } from "react";
import { questions } from "./questions";
import "./faq.scss";

export const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggleSelected = (selectedIndex) => {
    if (selectedIndex === selected) {
      return setSelected(null);
    }

    return setSelected(selectedIndex);
  };
  return (
    <section className="faq">
      <div className="container">
        <h2>
          <img
            src={require("../../images/question_yellow.png")}
            className="yellowQ"
            alt=""
          />
          <img
            src={require("../../images/question_purple.png")}
            className="purpleQ"
            alt=""
          />
          Frequently asked <span className="highlight">questions</span>
        </h2>
        <p>
          Don't worry if you have any questions for us, we will always be ready
          to help you and answer all the questions you have for us
        </p>
        <ul className="list-items">
          {questions.map((question) => {
            return (
              <li key={question.id} className="wrapper">
                <div
                  className="question"
                  onClick={() => toggleSelected(question.id)}
                >
                  {question.key}
                  <div className="toggleIcon">
                    {selected === question.id ? (
                      <i className="gg-math-minus" />
                    ) : (
                      <i className="gg-math-plus" />
                    )}
                  </div>
                </div>
                <div
                  className={
                    selected === question.id ? "answer show" : "answer"
                  }
                >
                  {question.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
