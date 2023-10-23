import React from "react";
import classes from "./brands.module.css";

const BrandList = ({ img }) => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.imgDiv}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BrandList;
