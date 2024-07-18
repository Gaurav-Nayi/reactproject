  import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LoginImg from '/src/assets/1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../features/Loader'

const Login = () => {
  const {register , handleSubmit , formState:{errors} , trigger , getValues} = useForm()
  let [isLoading,setIsLoading]=useState(false)
  const redirect =useNavigate()
    let submitData=async(user)=>{
        // alert(JSON.stringify(user))
        try{
            // let res =await fetch(`https://667a8641bd627f0dcc8f5abe.mockapi.io/users?email=${user.email}`)
            // let data = await res.json()
            // if (data[0].password == user.password){
            //   redirect('/')
            // }
            // else{
            //    toast.error("Invalid Credentials")
            // } 

            setIsLoading(true)
            let res = await axios.get(`https://667a8641bd627f0dcc8f5abe.mockapi.io/users?email=${user.email}`)
            if(res.data[0].password == user.password){
              console.log("gkjgk")
              if(res.data[0].role=="0"){
                toast.success("Loggedin Successfully")
                redirect('/admin')
              }
              else if(res.data[0].role=="1"){
                toast.success("Loggedin Successfully")
                redirect('/')
              }

              let obj = {isLoggedIn:true , email:res.data[0].email , name:res.data[0].username , role:res.data[0].role}
              sessionStorage.setItem("11apr",JSON.stringify(obj))
              setIsLoading(false)
            }
            else{
              setIsLoading(false)
              toast.error("Invalid Credentials")
            }
           
        }
        catch(err){
          setIsLoading(false)
          toast.error("Invalid Credentials")
        }
    }
  return (
    <>
    {isLoading && <Loader/>}
    <Container className='col-8 shadow mt-5 p-3'>
      <h1>Login Page</h1><hr/>
        <Row>
          <Col>
            <Image src={LoginImg} fluid/>
          </Col>
            <Col>
                <Form onSubmit={handleSubmit(submitData)}>
                      <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" {...register('email' ,
                        {required:"Email is required",
                            pattern:{
                                value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message : 'Invalid Email'
                            }})} onBlur={()=>trigger('email')}></Form.Control>
                        {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" {...register('password',{required:'Password is required'})}
                        onBlur={()=>trigger('password')}></Form.Control>
                        {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                    </Form.Group>
                    
                    <Button type='submit' className='mt-3' >Login</Button>
                    <p>Create an account?? <Link to='/register'>Register</Link></p>
                </Form>
            </Col>
        </Row>      
    </Container>
    </>
  )
}

export default Login
