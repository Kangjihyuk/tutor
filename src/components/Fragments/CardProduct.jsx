import React from 'react'
import Button from '../Elements/Button/Button';
const CardProduct = ({children}) => {
  return (
      <div className="w-full max-w-sm bg-black border border-gray-300 rounded-lg shadow flex flex-col justify-between my-2">
        {children}
    </div>
  )
}

const Header = (props) => {
    const {images} = props
    return (
      <a href="#">
        <img src={images} alt="cake" className="p-8 rounded-lg" />
      </a>
    );
}

const Body = (props) => {
    const {children,name} = props
    return (
      <div className="px-5 pb-5 h-full">
        <a href="#">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            {name}
          </h2>
        </a>
        <p className="text-white text-sm">
          {children}
        </p>
      </div>
    );
}

const Footer = (props) => {
    const {price,children,handleAddToCard,id} = props
    return (
      <div className="flex justify-between px-5 pb-5 items-center gap-3 ">
        <span className="text-xl font-bold text-white">Rp {price.toLocaleString('id-ID', {styles: "currency",currency : "IDR"})}</span>
        <Button classname="bg-blue-600 w-[50%]" onClick={()=>handleAddToCard(id)}>{children}</Button>
      </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct