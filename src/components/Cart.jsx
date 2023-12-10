import { FaShoppingCart, } from 'react-icons/fa';
import CartItem from './CartItem';
import { useState } from 'react';
function Cart({ cart, emptyCart }) {

  const OpenCart = () => {

    const productsShoppingCart = document.querySelector(".products_shopping_cart")
    productsShoppingCart.style.display = (productsShoppingCart.style.display == "" || productsShoppingCart.style.display == "none") ? "block" : "none"
  }
  const closeProduct = () => {
    const productsShoppingCart = document.querySelector(".products_shopping_cart")
    productsShoppingCart.style.display = (productsShoppingCart.style.display == "" || productsShoppingCart.style.display == "none") ? "block" : "none"
  }
  return (
    <div>
      <div className='shopping_cart'>
        <div onClick={OpenCart} className='shopping_price'>

          <div className='shopping_cart_icon'>
            <FaShoppingCart />
            <div className='elementor-button-icon'>
              <span>{cart ? cart.length : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart