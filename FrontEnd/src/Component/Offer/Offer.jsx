import React from 'react'
import './Offer.css';
import offer_img from '../Asset/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exlusive Offer</h1>
        <p>ONLY FOR BEST PRODUCT</p>
        <button>Explore</button>
      </div>
      <div className="offer-right">
        <img src={offer_img}/>
      </div>
    </div>
  )
}

export default Offer
