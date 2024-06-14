import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {register , handleSubmit , formState:{errors} , trigger , getValues} = useForm()
    let submitData=(user)=>{
        alert(JSON.stringify(user))
    }
  return (
    <Container className='col-8'>
        <Row>
            <Col>
                <Form onSubmit={handleSubmit(submitData)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" {...register('username',
                        {required:"Username is required",
                         minLength:{value:'5', message:'min 5 char'},
                         maxLength:{value:'10' , message:'max 10 char'}
                        })} onBlur={()=>trigger('username')}></Form.Control>
                        {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                    </Form.Group>
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
                    <Form.Group>
                        <Form.Label className='mb-3'>Confirm Password</Form.Label>
                        <Form.Control type='password' name='cpassword' {...register('cpassword' ,{required:'Confirm Password is required',
                        validate:(cpwd)=>{
                            let {password}=getValues()
                            return password==cpwd || "password not match"
                        }
                        })}
                        onBlur={()=>trigger('cpassword')}></Form.Control>
                        {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                    </Form.Group>
                    <Button type='submit' className='mt-3' >Submit</Button>
                </Form>
            </Col>
        </Row>      
    </Container>
  )
}

export default ReactHookForm
