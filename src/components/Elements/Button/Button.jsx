import React from "react";

const Button = (props) => {
  const { classname, children, type ,onClick } = props;
  return (
    <button
      className={`${classname} py-2 px-5 rounded-md h-10 font-semibold text-white w-full`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
