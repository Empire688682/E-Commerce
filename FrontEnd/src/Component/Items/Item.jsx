import React from 'react';
import './Items.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
            <div className="item-img-con">
            <NavLink to={`/product`}><img src={props.image} /></NavLink>
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
