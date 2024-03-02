import React from 'react'
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay collected</p>
      <div className="news-letter-con">
        <input type="text" placeholder='Your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
