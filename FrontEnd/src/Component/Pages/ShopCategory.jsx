import React from 'react'
import './CSS/CSS.css';
import { useGlobalContext } from '../../Context';
import Item from '../Items/Item';
import Dropdown_Icon from '../Asset/dropdown_icon.png'
 
const ShopCategory = (props) => {
  const {all_Product} = useGlobalContext();
  console.log(all_Product)
  return (
    <div className='shop-category'>
      <div className="shop-category-banner">
        {
          // eslint-disable-next-line react/prop-types
          <img src={props.banner} alt='Banner' title='Cat-Bnner' />
        }

        <div className="category-header">
          <div className="left">
            1 to 12
          </div>
          <div className="right">
            <p>Sort</p>
            <img src={Dropdown_Icon}/>
          </div>
        </div>
      </div>
      <div className="shop-cartegory-cart">
      {
        all_Product.map((items, i) =>{
          // eslint-disable-next-line react/prop-types
          if(items.category === props.category){
            return <Item key={i}  id={items} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price}/>
          }
          else return null
        })
      }
      </div>
    </div>
  )
}

export default ShopCategory
