import React, {useState} from 'react'
import './ProductDisplay.css'
import Star_Icon from '../Asset/star_icon.png';
import Dull_Star_Icon from '../Asset/star_dull_icon.png';
import { useGlobalContext } from '../../Context';

const ProductDisplay = (props) => {
 const { addToCart } = useGlobalContext();
    const {product, review} = props;
  return (
    <div className='product-display'>
      <div className="product-display-left">
            <div className="product-display-left-left">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className="product-display-left-right">
                <img src={product.image}/>
            </div>
      </div>
      <div className="product-display-right">
        <h4>{product.name}</h4>
        <div className="product-display-rating-box">
           <div className="stars">
           <img src={Star_Icon}/>
            <img src={Star_Icon}/>
            <img src={Star_Icon}/>
            <img src={Star_Icon}/>
            <img src={Dull_Star_Icon}/>
           </div>
            <p className="rating-number">({review})</p>
        </div>
        <div className="product-display-prices">
            <p className="old-price">${product.old_price}</p>
            <p className="new-price">${product.new_price}</p>
            
        </div>
        <p className="product-display-prices-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo facere similique quam officiis suscipit incidunt rem beatae, laudantium id saepe modi consectetur quaerat? Eum sit similique fugit quia soluta.</p>
        <div className="product-display-sizes">
            <h4 className='size-head'>Select Size</h4>
            <div className="sizes">
                <li>S</li>
                <li>M</li>
                <li>I</li>
                <li>XL</li>
                <li>XLM</li>
            </div>
        </div>
        <button onClick={ ()=> addToCart(product.id)}>Add to cart</button>
        <div className="category">
            <h4>Category:</h4>
            {product.category}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
