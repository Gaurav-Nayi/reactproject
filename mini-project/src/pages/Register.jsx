import React, { useState } from 'react'
import Image1 from '/src/assets/2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Register = () => {
    let obj = { username: '', email: '', password: '', cpassword: '', roll: '1' , id: Date.now()}
    let [user, setUser] = useState({ ...obj })
    let [errors, setErors] = useState({})
    const redirect = useNavigate()

    let validations = () => {
        let formerrors = {}
        let pattern = /^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if (user.username == '') {
            formerrors.nameerr = "username is required";
        }
        if (user.email == '') {
            formerrors.emailerr = "email is required"
        }
        else if (!pattern.test(user.email)) formerrors.emailerr = "Invalid Email"
        if (user.password == '') formerrors.pwderr = 'password is required'
        if (user.cpassword == '' || user.password != user.cpassword) formerrors.cpwderror = "password not match"
        return formerrors
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let myerrors = validations()
        if (Object.keys(myerrors).length == 0) {
            setErors({})
            setUser({ ...obj })
            //   alert(JSON.stringify(user))
            try {
                // await fetch("https://667a8641bd627f0dcc8f5abe.mockapi.io/users", {
                //     method: "POST",
                //     headers: { 'content-type': 'application/json' },
                //     body: JSON.stringify(user)
                // })

                // await axios.post("https://667a8641bd627f0dcc8f5abe.mockapi.io/users",user)
                // toast.success("Registered Successfuly")
                // redirect('/login')

                await fetch("http://localhost:1000/users", {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(user)
                })
                toast.success("Registered Successfuly")
                redirect('/login')
            }
            catch (err) {
                toast.error(err.massage)
            }
        }
        else {
            setErors(myerrors)
        }

    }
    return (
        <div className='container'>

            <div className="row">
                <div className="col">
                    <img src={Image1} className='img-fluid' />
                </div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" name="username" className={`form-control ${errors.nameerr && `is-invalid`}`}
                                value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            {errors.nameerr && <span className='text-danger'>{errors.nameerr}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" name="email" className={`form-control ${errors.emailerr && `is-invalid`}`}
                                value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" className={`form-control ${errors.pwderr && `is-invalid`}`}
                                value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="cpassword" className={`form-control ${errors.cpwderror && `is-invalid`}`}
                                value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} />
                            {errors.cpwderror && <span className='text-danger'>{errors.cpwderror}</span>}
                        </div>
                        <button type="submit" class="btn btn-primary"  >Submit  </button>
                        <p>Already an account?? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
