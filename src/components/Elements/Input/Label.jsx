import React from "react";

export const Label = (props) => {
  const { name, children } = props;
  return (
    <label
      name={name}
      className="block text-sm font-bold mt-2 text-gray-700 py-2"
    >
      {children}
    </label>
  );
};
