import React from 'react'
import Button from '../Elements/Button/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cardSlices";
const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-black border border-gray-300 rounded-lg shadow flex flex-col justify-between my-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={images}
        alt="cake"
        className="p-8 rounded-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h2>
      </a>
      <p className="text-white text-sm">{children.substring(0, 100)}...</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, children, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-5 pb-5 items-center gap-3 ">
      <span className="text-xl font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-600 w-[50%]"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        {children}
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct