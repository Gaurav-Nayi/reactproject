import React, { Component, createRef } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class ComponentLifeCycleMethods extends Component {
    constructor(props) {
      super(props)
        console.log("constructor called")
      this.state = {username:this.props.uname}
      this.focusRef=createRef()
    }
   static getDerivedStateFromProps(state,props) {
        console.log("getDerivedStateFromProps called")
        return(state)
   }
   componentDidMount(){
        console.log("componentDidMount Called")
        this.focusRef.current.focus()
   }
   handleClick=()=>{
     console.log("handleClick Called")
     this.setState({username:"Meera"})
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate Called") 
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Called")
        this.focusRef.current.value=this.state.username
        let color = Math.floor(Math.random()*999999)
        this.focusRef.current.style.backgroundColor='#'+color
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    console.log("render called")
    return (
      <>
        <h1>Component Life Cycle Methods</h1>
        <Form.Control ref={this.focusRef}></Form.Control>
        <h1>{this.state.username}</h1>
        <Button onClick={this.handleClick}>Change Name</Button>
      </>
    )
  }
}
