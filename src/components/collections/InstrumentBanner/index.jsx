import React from "react";
import { Button } from "../../button";
import "./index.scss";

export const InstrumentBanner = ({ name, quantity }) => {
  return (
    <div className="instrument-banner">
      <div>
        <h3>{name}</h3>
        <h5>{quantity} Items</h5>
      </div>
      <Button>
        <i class="gg-arrow-top-right" />
      </Button>
    </div>
  );
};
