import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.services";
export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setUsername(getUsername(token)) : (window.location.href = "/login");
  }, []);
  return username;
};
