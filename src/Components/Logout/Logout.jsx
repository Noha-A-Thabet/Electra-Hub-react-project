import React from "react";
import classes from "./Logout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const logoutHanlder = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className={classes.logout}>
      <h1>
        Welcome <span className={classes.user__Name}>{user.name}</span>
      </h1>
      <button className={classes.logout__button} onClick={logoutHanlder}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
