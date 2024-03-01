import React from 'react'
import './NewCollection.css';

const NewCollection = (props) => {
  return (
    <div className='new-collection'>
        <div className="new-collection-img-con">
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

export default NewCollection
