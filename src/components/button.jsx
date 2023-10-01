import React from "react";
import "./button.scss";

export const Button = ({
  text,
  searchClass,
  seeMoreClass,
  getDirectionClass,
  contactUsClass,
}) => {
  let addClass = "button";
  if (searchClass) addClass = addClass.concat(" search");
  if (seeMoreClass) addClass = addClass.concat(" seeMore");
  if (getDirectionClass) addClass = addClass.concat(" getDirection");
  if (contactUsClass) addClass = addClass.concat(" contactUsBtn");
  return <button className={addClass}>{text}</button>;
};
