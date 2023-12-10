// ProductItem.jsx
import React from 'react';

function ProductItem({ product, setCart }) {
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className='products_item'>
      <div className='productcart'>
        <div className='product_image'>
          <img src={product.image}  />
          <div className='product_description'>
            <h2>{product.name}</h2>
            <p>₼{product.price}</p>
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductItem;
