import React, { useCallback, useEffect, useState } from 'react'

const RandomNumGenerator = () => {
    let [password,setPassword]=useState()
    let [length,setLength]=useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    // let generateNum = ()=>{
    //     let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed) {str += '9876543210'}
    //     if(charAllowed){str += '!@#$%^&*-_+=.'}
    //     let data = ''
    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length))
    // }
    // setPassword(data)
    // }

    let generateNum = useCallback(()=>{
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(numAllowed) {str += '9876543210'}
        if(charAllowed){str += '!@#$%^&*-_+=.'}
        let data = ''
        for(let i=1;i<=length;i++){
            data += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(data)
    },[length,numAllowed,charAllowed])

    


        useEffect(()=>{
            generateNum()
        },[length,numAllowed,charAllowed])
  return (
    <div className='container mt-5 col-6 p-3'> 
        <input type="text" className='form-control'value={password}/><br/>
        <input type="range" value={length} min="5" max="100" onChange={(e)=>setLength(e.target.value)}/> length({length}) {"  "}
        <input type="checkbox" value={numAllowed} onClick={()=>setNumAllowed(!numAllowed)}/>Numbers
        {"  "}
        <input type="checkbox" value={charAllowed} onClick={()=>setCharAllowed(!charAllowed)}/>Characters
    </div>
  )
}

export default RandomNumGenerator
