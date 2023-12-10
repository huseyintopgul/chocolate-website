import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import ProductsCartBtn from './ProductsCartBtn';
function CartItem({cart, emptyCart}) {

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

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
      <div className='products_shopping_cart'>
    <div className='shopping_products_cart_icon'>
        <i onClick={closeProduct} className='fas fa-xmark'></i>
      </div>

      {cart.map((item) => (
        <div className='products_title' key={item.id}>

      <div className='products_cart_image_desc'>
        <img src={item.image}></img>

        <div className='products_description'>
        <h3>{item.name}</h3>

        <div className='clear_products'>
          <FaRegWindowClose id='remove' />
        </div>
        </div>
      </div>
      <hr></hr>
    </div>
      ))}
      <div className='total'>
        <span> <b>Subtotal:</b></span>
        <p>${total}</p>
      </div>
      <div className='products_cart_btn'>
        <ProductsCartBtn />
      </div>
    </div>
    </div>
  )
}

export default CartItem