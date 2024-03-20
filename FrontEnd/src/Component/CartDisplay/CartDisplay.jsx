import React from 'react'
import './CarDisplay.css'
import { useGlobalContext } from '../../Context'
import cross_Icon from '../Asset/cart_cross_icon.png'

const CartDisplay = () => {
   const {getSubTotal,cartItems,all_Product,removeFromCart } = useGlobalContext();
  return (
    <div className=' cart-display'>
      <div className="cart-display-heading">
        <div className="P-T">
        <h1>Product</h1>
        <h1>Title</h1>
        </div>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
        <h1>Remove</h1>
      </div>
      {
        all_Product.map((items, i) => {
            if(cartItems[items.id] > 0){
            return <div key={i} className="cart-display-content">
                <div className="P-T-siblings">
                <img src={items.image} />
                <h2>{items.name}</h2>
                </div>
                <h2>${items.new_price}</h2>
                <h2 className='quatity'>{cartItems[items.id]}</h2>
                <h2 className='quatity'>${items.new_price * cartItems[items.id]}</h2>
                <img onClick={()=>removeFromCart(items.id)} className='remove-icon' src={cross_Icon} />
            </div>
            }
        })
      }
      <div className="main-total">
        <div className="total-1"></div>
        <div className="total-2">
        <div>
        <h3>Subtotal:</h3>
        <h3>${getSubTotal()}</h3>
        </div>
        <div>
        <h3>Free Shipping</h3>
        <h3>$0</h3>
        </div>
        <button>Proceed to checkeout</button>
      </div>
      </div>
     </div>
  )
}

export default CartDisplay
