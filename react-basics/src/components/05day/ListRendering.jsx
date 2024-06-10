import React from 'react'

const ListRendering = () => {
    let names = ["abc", "xyz","pqr" , "uvw"]
  return (
    <>
      {names.map((n,i)=><h1 key={i}>{n}</h1>)}
    </>
  )
}

export default ListRendering
