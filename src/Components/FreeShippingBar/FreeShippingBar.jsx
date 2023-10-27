import React from "react";
import classes from "./FreeShippingBar.module.css";

const FreeShippingBar = () => {
  return (
    <nav className={classes.shippingBar}>
      <ul>
        <li>Exclusive app benefits</li>
        <li>Free shipping over €59*</li>
        <li>collect points</li>
      </ul>
    </nav>
  );
};

export default FreeShippingBar;
