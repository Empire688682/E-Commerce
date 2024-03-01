import React from 'react'
import Data from '../Asset/data';
import './Popular.css'

const Popular = () => {
    console.log(Data)
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className="popular-product">
       {
        Data.map((items, i) =>
            <div className="popular-product-cart" key={i} id={items.id}>
            <img src={items.image} />
            <p className='product-name'>{items.name}</p>
            <div className="products-price">
                <p className="product-new-price">${items.new_price}</p>
                <p className="product-old-price">${items.old_price}</p>
            </div>

        </div>
        )
       }
      </div>
    </div>
  )
}

export default Popular
