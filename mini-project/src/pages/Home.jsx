import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from '../features/Admin/Slider'


const Home = () => {
const [users,setUsers]=useState([])
  // useEffect(()=>{getdata()},[])


    // let getdata=()=>{
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res)=>{
    //    return res.json().then(data=>{
    //       console.log(data)
    //       setUsers(data)
    //     })
    //   })
    //   .catch(err=>console.log(err))
    // }  


    // let getdata=async()=>{
    //   try{
    //     let res = await fetch("https://jsonplaceholder.typicode.com/users") 
    //     let data = await res.json()
    //     setUsers(data)
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }  

    // let getdata=()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //            console.log(res)
    //         setUsers(data)
    //     })
    //     .catch(err=>console.log(err))
    //   }  

    // let getdata=async()=>{
    //   try{
    //     let res = await axios.get("https://jsonplaceholder.typicode.com/users")
    //     console.log(res)
    //       setUsers(res.data)
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }  

    // let getdata=async()=>{
    //   try{
    //     let res = await axios.get('https://dummyjson.com/users')
    //     console.log(res)
    //       setUsers(res.data.users)
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }  
  
    // let getdata=async()=>{
    //   try{
    //     let res = await axios.get('http://localhost:1000/users')
    //     console.log(res)
    //       setUsers(res.data)
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }  
  
  
    
  return (
    <>
  
    <Slider/>
      <h1>Home Page</h1>
      {/* {users.length==0 && <h1>No user found</h1>}
      {users.map((user,i)=><h1>{user.name}</h1>)} */}
      {/* {users.map((user,i)=><h1>{user.firstName}</h1>)} */}
    </>
  )
}

export default Home
