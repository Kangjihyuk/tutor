import React from "react";
import Button from "../Elements/Button/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const username = useLogin();
  return (
    <div className="bg-teal-500 flex justify-end  items-center py-5 text-white font-bold px-8">
      {username}
      <Button onClick={handleLogout} classname="ml-5 bg-black w-[7.5%]">
        Logout
      </Button>
      <div className="flex items-center bg-gray-600 p-2 rounded-md ml-5">
        item : {totalCart} | price : {total}
      </div>
      <Button classname="ml-5 bg-black w-[7.5%]" onClick={handleClick}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
