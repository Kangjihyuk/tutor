import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product.services.js";
import { useLogin } from "../hooks/useLogin.jsx";
import { Table } from "../components/Fragments/Table.jsx";
import Navbar from "../components/Layout/Navbar.jsx";
import { useContext } from "react";
import { DarkMode } from "../context/DarkMode.jsx";
const Products = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 gap-5 mt-7 ${
          isDarkMode && "bg-slate-900"
        }`}
      >
        <div className="w-[55%] grid grid-cols-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header images={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}>
                  Add to Card
                </CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-[45%]">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-5">Card</h1>
          <Table products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
