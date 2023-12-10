import React from 'react'
import Map from './Map'
import Productİtem from './Productİtem'
import productData from '../PoductsData'
function ProductsCart(props) {
  console.log(productData)

  return (
    <div>
    <div className='productcart'>
    {productData.map((product) => (
      <Productİtem
            key={product.id}
            product={product}
            setCart={props.setCart}
            cart={props.cart}
          />
    ))}
    
    </div>
    <Map />
    </div>

  )
}

export default ProductsCart