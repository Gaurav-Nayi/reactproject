import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/cartSlice'


const ProductCard = ({product}) => {
const dispatch = useDispatch()
  let handleClick=()=>{
     dispatch(ADD_TO_CART(product))
  }
  return (
    <div className='col-3'>
         <div class="card">
            <img className="card-img-top" src={product.image} alt={product.name} height={200} />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.category}</p>
                <p className="card-text">{product.brand}</p>
                <p className="card-text">{product.price}</p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Add to cart</button>
                    
                
            </div>
        </div>
        
      
    </div>
  )
}

export default ProductCard
