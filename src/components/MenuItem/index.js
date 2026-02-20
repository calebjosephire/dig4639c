import React from "react";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-Item" id={`menu-Item-${itemId}`}>
        <span>${itemPrice}</span>
        <h2>{itemName}</h2>
        <p>{itemDescription}</p>
        <button>Add to Cart</button>
    </div>
  );
}

export default MenuItem;