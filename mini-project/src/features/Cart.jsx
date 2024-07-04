import React, { useContext } from 'react'
import { MyContext } from './ContextData'

const Cart = () => {
  const data=useContext(MyContext)
  let {cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}=data
  return (
    <div className='container mt-5 shadow p-2'>
      <h1>cart page</h1>
      <hr/>

      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover" >
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th>Price</th>
              <th>Quantity</th> 
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length==0 && <tr><td colspan={7}>No Item in Cart</td></tr>}
            {cartItems.map((c,i)=>
            <tr key={i}>
              <td scope="row">R1C1</td>
              <td>R1C2</td>
              <td>R1C3</td> 
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Cart
