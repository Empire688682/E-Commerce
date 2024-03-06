import React from 'react'
import './RelatedProduct.css'
import Data from '../Asset/data';
import Item from '../Items/Item';

const RelatedProduct = () => {
  return (
    <div className='related-product'>
      <h1> RELATED PRODUCT</h1>
      <div className="related-product-cart">
      {
        Data.map((items,i) =>{
            return <Item key={i} id={items.id} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price}/>
        })
      }
      </div>
    </div>
  )
}

export default RelatedProduct
