import React from 'react'
import './CSS/CSS.css';
import { useGlobalContext } from '../../Context';
import Item from '../Items/Item';
import Men_Banner from '../Asset/banner_mens.png'
import Women_Banner from '../Asset/banner_women.png'
import Kids_Banner from '../Asset/banner_kids.png'
const ShopCategory = (props) => {
  const {all_Product} = useGlobalContext();
  console.log(all_Product)
  return (
    <div className='shop-category'>
      <div className="shop-category-banner">
        {
          // eslint-disable-next-line react/prop-types
          props.banner === "men"? <img src={Men_Banner} /> : props.banner === "women" ? <img src={Women_Banner} />:<img src={Kids_Banner} />
        }
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
