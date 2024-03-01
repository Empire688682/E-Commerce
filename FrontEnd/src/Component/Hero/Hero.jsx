import React from 'react'
import './Hero.css';
import Hand_Icon from '../Asset/hand_icon.png';
import Hero_Image from '../Asset/hero_image.png'
import Arrow_Icon from '../Asset/arrow.png'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="Hero-left">
        <h1>NEW ARRIVALS ONLY</h1>
        <div>
            <div className="hand-icon">
                <h2>new</h2>
                <img src={Hand_Icon} />
            </div>
            <div className='Hero-left-collection'>
                <h2>collections for everyone</h2>
                <button>
                <p>Latest Collections</p>
                <img src={Arrow_Icon} />
            </button>
            </div>
        </div>
      </div>
      <div className="Hero-right">
        <img src={Hero_Image}/>
      </div>
    </div>
  )
}

export default Hero
