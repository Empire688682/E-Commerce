import React from 'react'
import { useGlobalContext } from '../../Context'

const Product = () => {
  const {all_Product} = useGlobalContext()
  return (
    <div>
      Product
    </div>
  )
}

export default Product
