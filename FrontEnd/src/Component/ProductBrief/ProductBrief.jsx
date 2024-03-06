import React from 'react'
import './ProductBrief.css'
import Black_Arrow from '../Asset/breadcrum_arrow.png'

const ProductBrief = (props) => {
  const {product} = props
  return (
    <div className='product-brief'>
      Home <img src={Black_Arrow}/> Shop <img src={Black_Arrow}/> {product.category} <img src={Black_Arrow}/> {product.name}
    </div>
  )
}

export default ProductBrief
