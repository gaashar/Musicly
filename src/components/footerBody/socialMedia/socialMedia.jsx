import React from "react";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="background discord">
        <img src={require("../../../images/discord.png")} alt="" />
      </div>
      <div className="background instagram">
        <img src={require("../../../images/instagram.png")} alt="" />
      </div>
      <div className="background twitter">
        <img src={require("../../../images/twitter.png")} alt="" />
      </div>
      <div className="background facebook">
        <img src={require("../../../images/facebook.png")} alt="" />
      </div>
    </div>
  );
};
