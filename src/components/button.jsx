import React from "react";
import "./button.scss";

export const Button = ({ text, searchClass }) => {
  let addClass = "button";
  if (searchClass) addClass = "button search";
  return <button className={addClass}>{text}</button>;
};
