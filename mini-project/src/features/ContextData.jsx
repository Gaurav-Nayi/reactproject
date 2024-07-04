import React, { Children, useState } from 'react'
export const MyContext = React.createContext()

const ContextData = ({children}) => {
    let [cartItems,setCartItems]=useState([])
    let [total,setTotal]=useState(0)
    let addtocart=(product)=>{alert(JSON.stringify(product))}
    let increase=()=>{}
    let decrease=()=>{}
    let removefromcart=()=>{}
    let emptycart=()=>{}
    let calculate_total=()=>{}
  return (
    <>
      <MyContext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default ContextData
