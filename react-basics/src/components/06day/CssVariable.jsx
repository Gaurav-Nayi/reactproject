import React from 'react'

const CssVariable = () => {
    let cssvar = {
        color:'blue',borderRadius:'20px',height:'100px',border:'2px solid yellow',textDecoration:'underline'
    }
  return (
    <>
      <h1 style={cssvar}>css variable</h1>
    </>
  )
}

export default CssVariable
