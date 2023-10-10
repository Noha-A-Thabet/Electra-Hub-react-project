import React from "react";
import classes from "./NewsBar.module.css";
const NewsBar = (props) => {
  const { image, newsTitle, newsHeading, newsPara } = props;
  return (
    <div className={classes.slider}>
      <div className={classes.sliderContainer}>
        <img src={image} alt="" className={classes.newsImage} />
      </div>
      <div className={classes.sliderInfo}>
        <h3 className={classes.newsTitle}>{newsTitle}</h3>
        <h1 className={classes.newsHeading}>{newsHeading}</h1>
        <p className={classes.newsPara}>{newsPara}</p>
      </div>
    </div>
  );
};

export default NewsBar;
