import React, { Component } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import Refchild from './Refchild'

export default class RefDemoinClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = { username:''}
      this.myRef = React.createRef()
      this.countRef=React.createRef()
    }
    componentDidMount(){
        this.myRef.current.focus()
    }

    decrease=()=>{
        if(this.countRef.current.value>1)
            this.countRef.current.value--
        else this.countRef.current.value=1
    }
    
  render() {
    console.log("render called")
    return (
      <>
        {/* <Form.Control value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></Form.Control> */}
     
        <FormControl ref={this.myRef}></FormControl>
        <Refchild innerRef = {this.myRef} countRef={this.countRef}></Refchild>
        <button type="button" onClick={()=>this.countRef.current.value++}>+</button>
        <button type="button" onClick={this.decrease}>-</button>
      </>
    )
  }
}
