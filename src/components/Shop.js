import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import Loader from "./Loader";
import Products from './Products'
import Card from "./Card";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.featured);
        setLoading(false);
      });
  });

  return (
    <div className="container content">
      <Card />
      {loading ? (
        <Loader />
      ) : <Products products={products} />}
    </div>
  );
}
