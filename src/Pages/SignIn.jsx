import React from "react";
import Login from "../Components/Login/Login";
import { useSelector } from "react-redux";
import Logout from "../Components/Logout/Logout";

const SignIn = () => {
  const { user } = useSelector((state) => state.user);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default SignIn;
