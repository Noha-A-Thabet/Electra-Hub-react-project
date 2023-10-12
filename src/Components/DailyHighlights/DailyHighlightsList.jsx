import React from "react";
import classes from "./DailyHighlights.module.css";

const DailyHighlightsList = (props) => {
  const { name, image, price, prevPrice } = props.item;
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <div className={classes.freeDiv}>
            <p className={classes.free}>Free Shipping</p>
          </div>
          <img src={image} alt="" />
          <span className={classes.rating}>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars fa-solid fa-star"></i>
            <i class="stars last fa-solid fa-star"></i>
          </span>
          <h2>{name}</h2>
          <p className={classes.prevPrice}>${prevPrice}</p>
          <p className={classes.price}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyHighlightsList;
