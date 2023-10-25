import React, { useState } from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeEmailHandler = (e) => {
    setemail(e.target.value);
  };
  const changePassHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name,
        email,
        password,
        logdedIn: true,
      })
    );
  };

  const loginHandler = () => {};

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={submitFormHandler}>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={changeNameHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changeEmailHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={changePassHandler}
        />
        <button type="submit" className={classes.btn} onClick={loginHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
