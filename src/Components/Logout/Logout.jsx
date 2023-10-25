import React from "react";
import classes from "./Logout.module.css";

const Logout = () => {
  return (
    <div className={classes.logout}>
      <h1>
        Welcome <span className={classes.user__Name}>Noha</span>
      </h1>
      <button className={classes.logout__button}>Logout</button>
    </div>
  );
};

export default Logout;
