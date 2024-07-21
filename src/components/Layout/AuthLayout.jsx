import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayout = (props) => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-500 p-4 rounded-lg"
          onClick={() => handleDarkMode()}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your name
        </p>
        {children}
        <p className="text-center mt-4">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout