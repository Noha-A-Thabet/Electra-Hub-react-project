import React from "react";
import classes from "./DailyHighlights.module.css";

const DailyHighlightsList = (props) => {
  const { name, image, price } = props.item;
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>
          <img src={image} alt="" />
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default DailyHighlightsList;
