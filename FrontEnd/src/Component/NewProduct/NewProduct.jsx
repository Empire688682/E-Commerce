import React from 'react';
import './NewProduct.css';
import New_Collection_Dtata from '../Asset/new_collections';
import Item from '../Items/Item';
import NewCollection from '../NewCollections/NewCollection';

const NewProduct = () => {
  return (
    <div className='new-product'>
      <h1>New Product</h1>
      <div className="new-product-cart">
      {
        New_Collection_Dtata.map((items,i) =>{
            return<NewCollection key={i} id={items} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price} />
        })
      }
      </div>
    </div>
  )
}

export default NewProduct
