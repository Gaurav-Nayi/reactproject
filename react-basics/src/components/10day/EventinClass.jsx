import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class EventinClass extends Component {

    handleClick=()=>{
        alert("button Clicked")
    }

    handleClick1=(a,b)=>{
        alert(`button clicked ${a+b}`)
    }

  render() {
    let {username,address}=this.props
    return (
      <>
        {username}
        <Button variant='dark me-2' onClick={()=>alert("Button Clicked")}>Click Me</Button>
        <Button variant='dark me-2' onClick={this.handleClick}>Click Me</Button> 
        <Button variant='dark me-2' onClick={()=>this.handleClick1(2,3)}>Add</Button> 
      </>
    )
  }
}
