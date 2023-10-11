import React from "react";
import classes from "./DailyHighlights.module.css";
import AllDailyHighlights from "./AllDailyHighlights";

const DailyHighlights = () => {
  return (
    <div className={classes.daily}>
      <h1>Daily Highlight</h1>
      <AllDailyHighlights />
    </div>
  );
};

export default DailyHighlights;
