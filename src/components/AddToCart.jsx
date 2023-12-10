import React from 'react';

function AddToCart({ product }) {
  const handleClick = () => {
    console.log(product);
  };

  return (
    <div>
      <button onClick={handleClick}>ADD TO CART</button>
    </div>
  );
}

export default AddToCart;
