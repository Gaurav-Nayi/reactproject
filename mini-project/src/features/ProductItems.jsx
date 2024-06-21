import React from 'react'
import ProductCard from './ProductCard'

const ProductItems = ({products}) => {
  return (
    <div className='container mt-5'>
      {products.length == 0 && <h>No Product Found</h>}
      <div className="row">
      {products.map((product)=><ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default ProductItems
 