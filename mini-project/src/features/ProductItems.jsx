import React from 'react'
import ProductCard from './ProductCard'
import Loader from './Loader'

const ProductItems = ({products}) => {
  return (
    <div className='container mt-5'>
      {products.length == 0 && <h1><Loader/></h1>}
      <div className="row">
      {products.map((product)=><ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default ProductItems
 