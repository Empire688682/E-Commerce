import React from 'react'
import './NewCollection.css';
import New_Collections_Data from '../Asset/new_collections'
import Item from '../Items/Item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>
      <div className="new-collection-product">
        {
          New_Collections_Data.map((items, i)=>{
            return <Item key={i} id={items.id} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default NewCollection
