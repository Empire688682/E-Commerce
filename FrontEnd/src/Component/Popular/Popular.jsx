import React from 'react'
import Data from '../Asset/data';
import './Popular.css'
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className="popular-product">
       {
        Data.map((items, i) => { return <Item key={i} id={items.id} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price}/>}
        )
       }
      </div>
    </div>
  )
}

export default Popular
