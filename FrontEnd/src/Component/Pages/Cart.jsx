import React from 'react'
import CartDisplay from '../CartDisplay/CartDisplay'

const Cart = () => {
  return (
    <div className='cart'>
      <div className="cart-heading">
        <h1>Cart</h1>
      </div>
     <CartDisplay/>
    </div>
  )
}

export default Cart
