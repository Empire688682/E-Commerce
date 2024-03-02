import React from 'react'
import Hero from '../Hero/Hero';
import Popular from '../Popular/Popular'
import Offer from '../Offer/Offer';
import NewCollection from '../NewCollections/NewCollection';
import NewsLetter from '../NewsLetter/NewsLetter';


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
