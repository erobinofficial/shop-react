import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://e-commerce.herokuapp.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  if (products.length === 0) {
    return (
      <div>
        <div className="h-screen flex items-center justify-center">
          <button class="btn btn-square loading"></button>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-4 mt-6 justify-items-center">
      {products.map((product) => (
        <Product product={product} key={product._id}></Product>
      ))}
    </div>
  );
};

export default Products;
