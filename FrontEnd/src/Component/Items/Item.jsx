import React from 'react';
import './Items.css'

const Item = (props) => {
  return (
    <div className="item">
            <div className="item-img-con">
            <img src={props.image} alt='Product' />
            </div>
            <p className='product-name'>{props.name}</p>
            <div className="products-price">
                <p className="product-new-price">${props.newPrice}</p>
                <p className="product-old-price">${props.oldPrice}</p>
            </div>

    </div>
  )
}

export default Item
