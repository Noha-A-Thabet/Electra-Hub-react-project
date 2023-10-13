import React from "react";
import classes from "./DailyHighlights.module.css";
import AllDailyHighlights from "./AllDailyHighlights";

const DailyHighlights = () => {
  return (
    <div className={classes.daily}>
      <AllDailyHighlights />
    </div>
  );
};

export default DailyHighlights;
