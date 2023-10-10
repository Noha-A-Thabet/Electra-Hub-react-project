import React from "react";
import classes from "./delivery.module.css";
const Delivery = () => {
  return (
    <div className={classes.deliverySection}>
      {/* free delivery section */}
      <div className={classes.freeDelivery}>
        <h1>
          Get 15% cashback + <span>FREE DELIVERY</span>
        </h1>
        <p>
          on <span>Express</span> items on your first order
        </p>
      </div>
      {/* use code section */}
      <div className={classes.useCode}>
        <span>Use code:</span>
        <p>FIRST15</p>
      </div>
    </div>
  );
};

export default Delivery;
