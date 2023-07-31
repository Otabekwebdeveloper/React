import React from "react";

export default function Product(props) {
  const { id, name, description, price, full_background } = props;

  return (
    <>
      <div class="card" key={id}>
        <div class="card-image">
          <img src={full_background} alt={name} />
        </div>
        <div class="card-content">
          <span class="card-title">{name}</span>
          <p>{description}</p>
        </div>
        <div class="card-action">
          <button className="btn">Buy</button>
          <span className="right" style={{fontSize: '1.8rem'}}>${price}</span>
        </div>
      </div>
    </>
  );
}
