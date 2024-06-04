import React from 'react'
import Image1 from '../../assets/1.jpg'

const ImageDisplay = () => {
  return (
    <div>
      <img src={Image1}></img>
      {/* <img src={require('../../assets/2.jpg')}></img> */}
    </div>
  )
}

export default ImageDisplay
