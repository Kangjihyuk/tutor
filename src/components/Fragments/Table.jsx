import React from "react";
import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

export const Table = (props) => {
  const { isDarkMode } = useContext(DarkMode);
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.qty : 0);
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("card", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-10 ${
        isDarkMode && "text-white"
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              product && (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 20)}...</td>
                  <td className="px-2">
                    ${" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    ${" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              )
            );
          })}
      </tbody>
      <tr ref={totalPriceRef}>
        <td colSpan={3}>Total</td>
        <td>
          ${" "}
          {total.toLocaleString("id-ID", {
            styles: "currency",
            currency: "USD",
          })}
        </td>
      </tr>
    </table>
  );
};
