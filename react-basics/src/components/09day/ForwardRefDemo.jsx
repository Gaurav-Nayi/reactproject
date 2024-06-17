import React from 'react'
import { Form } from 'react-bootstrap'

const ForwardRefDemo = React.forwardRef ((props,ref) => {
  return (
    <>
      <Form.Control ref={ref} defaultValue={props.username}></Form.Control>
    </>
  )
})

export default ForwardRefDemo
