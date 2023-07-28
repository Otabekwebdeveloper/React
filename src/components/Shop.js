import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import Loader from "./Loader";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.featured);
        setLoading(false);
      });
  });

  return (
    <div className="container content">
      {loading ? <Loader /> : <h1>sdad</h1>}
    </div>
  );
}
