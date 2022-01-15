import React from "react";
import "./button.scss";

export const Button = ({ text, searchClass, seeMoreClass }) => {
  let addClass = "button";
  if (searchClass) addClass = addClass.concat(" search");
  if (seeMoreClass) addClass = addClass.concat(" seeMore");
  return <button className={addClass}>{text}</button>;
};
