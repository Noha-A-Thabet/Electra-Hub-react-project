import React from "react";
import classes from "./DailyHighlights.module.css";

const DailyHighlightsList = (props) => {
  const { name, image, price, prevPrice } = props.item;
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <img src={image} alt="" />
          <h2>{name}</h2>
          <p className={classes.prevPrice}>${prevPrice}</p>
          <p className={classes.price}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyHighlightsList;
