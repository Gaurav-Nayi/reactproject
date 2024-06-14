import React, { useState } from 'react'
import Image1 from '../../assets/2.jpg' 

const FormValidations = () => {
    let obj = {username:'',email:'',password:'',cpassword:''}
    let [user,setUser] =useState({...obj})
    let[errors,setErors]=useState({})
    let validations=()=>{
        let formerrors={}
        if(user.username==''){
            formerrors.nameerr="username is required";
        }
        if(user.email==''){
            formerrors.emailerr="email is required"
        }
        return formerrors
    }

    let handleSubmit=(e)=>{ e.preventDefault()
        let myerrors = validations()
        if(Object.keys(myerrors).length==0){
            setErors({})
            setUser({...obj})
            alert(JSON.stringify(user))
        }
        else{
            setErors(myerrors)
        }

     }
  return (
    <div className='container'>
        {JSON.stringify(user)}
        <div className="row">
            <div className="col">
                <img src={Image1}  className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text"  name="username" className={`form-control ${errors.nameerr && `is-invalid`}`}
                    value={user.username} onChange={ (e)=> setUser({...user, username:e.target.value})}/>
                    {errors.nameerr && <span className='text-danger'>{errors.nameerr}</span>}
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"  name="email" className="form-control"
                     value={user.email} onChange={ (e)=> setUser({...user, email:e.target.value})}/>
                     {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  name="password" className="form-control"
                     value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input type="password"  name="cpassword" className="form-control"
                     value={user.cpassword} onChange={(e)=> setUser({...user, cpassword:e.target.value})}/>
                 </div>
                 <button type="submit" class="btn btn-primary"  >Submit  </button>
                 
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormValidations
