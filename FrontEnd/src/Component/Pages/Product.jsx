import React, { useState } from 'react'
import { useGlobalContext } from '../../Context'
import { useParams } from 'react-router-dom';
import ProductBrief from '../ProductBrief/ProductBrief';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Description from '../Description/Description';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_Product} = useGlobalContext();
  const {ProductId} = useParams();
  const product = all_Product.find((e) => e.id === Number(ProductId));
  const [review, setReview] = useState(203)
  return (
    <div>
    <ProductBrief product={product}/>
    <ProductDisplay product={product} review={review}/>
    <Description review={review}/>
    <RelatedProduct/>
    </div>
  )
}

export default Product