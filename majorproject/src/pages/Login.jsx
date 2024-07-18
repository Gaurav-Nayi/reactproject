import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LoginImg from '/src/assets/1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../features/Loader'
import { useDispatch } from 'react-redux'
import { LOGIN_USER } from '../redux/authSlice'

const Login = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm()
  let [isLoading, setIsLoading] = useState(false)
  const redirect = useNavigate()
  const dispatch = useDispatch()
  let submitData = async (user) => {
    try {
      setIsLoading(true)
       let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users?email=${user.email}`)
       let data = await res.json()
       if (data[0].password == user.password) {
        if(data[0].role=='0'){
          redirect('/admin')
        }
        else{
          redirect('/')
        }
        let obj = {email:data[0].email,name:data[0].username,role:data[0].role,id:data[0].id}
        dispatch(LOGIN_USER(obj))
           toast.success("looggedIn successfully")
           setIsLoading(false)
         }
         else {
           setIsLoading(false)
           toast.error("Invalid Credentials")
         }

    }
    catch (err) {
      setIsLoading(false)
      toast.error("Invalid Credentials")
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <Container className='col-8 shadow mt-5 p-3'>
        <h1>Login Page</h1><hr />
        <Row>
          <Col>
            <Image src={LoginImg} fluid />
          </Col>
          <Col>
            <Form onSubmit={handleSubmit(submitData)}>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" {...register('email',
                  {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message: 'Invalid Email'
                    }
                  })} onBlur={() => trigger('email')}></Form.Control>
                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" {...register('password', { required: 'Password is required' })}
                  onBlur={() => trigger('password')}></Form.Control>
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
