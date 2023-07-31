import React from "react";
import Product from "./Product";

export default function Products(props) {
  const { products = [] } = props;

  // if (!products.lenght) {
  //   return <h3>Mahsulot yuq</h3>;
  // }

  return (
    <div className="products">
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
}
 