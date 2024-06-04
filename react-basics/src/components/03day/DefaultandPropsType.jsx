import React from 'react'
import propsTypes from 'prop-types'
const DefaultandPropsType = ({name="Guest",address="Ahmedabad",pincode}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <h3>{pincode}</h3>
    </div>
  )
}

// DefaultandPropsType.defaultProps={
//     name:'Guest'
// }

DefaultandPropsType.propsTypes={
    name:propsTypes.string,
    pincode:propsTypes.number
}

export default DefaultandPropsType
