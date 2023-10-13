import React from "react";
import classes from "./Mobiles.module.css";

const MobileList = ({ mobile }) => {
  const { name, price, image } = mobile;

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <img src={image} alt="" />
          <span className={classes.rating}>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars last fa-solid fa-star"></i>
          </span>
          <h2>{name}</h2>

          <p className={classes.price}>${price}</p>
        </div>
      </div>
      {/* //// */}
    </div>
  );
};

export default MobileList;
