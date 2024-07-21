import React from "react";
import { useLogin } from "../hooks/useLogin";
const user = () => {
  const username = useLogin(); //const
  return <div>{username}</div>;
};

export default user;
