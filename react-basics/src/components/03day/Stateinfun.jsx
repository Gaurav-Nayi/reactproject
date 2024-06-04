import React, { useState } from 'react'

const Stateinfun = () => {
    // let num1=10,num2=20,result=0

    let [num1]=React.useState(10)
    let [num2]=useState(20)
    let [result,setResult]=useState(0)
    let [name,setName]=useState("Raj")

    let handleAdd=()=>{
      // result = num1+num2
      setResult(num1+num2) 
      setName("Ram")
      console.log(result)
    }
  return (
    <>
    <h1>{name}</h1>
      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        Click Me  
      </button><br/>
      Num1= {num1} and Num2= {num2}<br/>
      Result - {result}
      
    </> 
  )
}

export default Stateinfun
