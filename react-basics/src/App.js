

import './App.css';
import React, { useState } from 'react';
import Firstfuncomp from './components/Firstfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Propsdemo from './components/02day/Propsdemo';
import Childrenpropsdemo from './components/02day/Childrenpropsdemo';
import Eventdemo from './components/02day/Eventdemo';
import ImageDisplay from './components/03day/ImageDisplay';
import DefaultandPropsType from './components/03day/DefaultandPropsType';
import Stateinfun from './components/03day/Stateinfun';
import CounterApp from './components/03day/CounterApp';
import FetchTextBoxData from './components/04day/FetchTextBoxData';
import Calculator from './components/04day/Calculator';
import Form1 from './components/04day/Form1';
import Form2 from './components/04day/Form2';
import ConditionalRendering from './components/05day/ConditionalRendering';
import Sidebar from './components/Sidebar';
import { Form, Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ListRendering from './components/05day/ListRendering';
import ProductList from './components/05day/ProductList';
function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(true)    
  
  return (
    <>
      
      <div className='container'>
       
          <Link to='/fun' type="button" class="btn btn-primary me-2" >Functional Component</Link>
          <Link to='/class' type="button" class="btn btn-danger " >Class Component</Link>

        
        <div className='row mb-3'>
          <Outlet/>

        </div>
        </div>
      
        

        {/* <h1 className='text-primary'>Hello React</h1> */}
        {/* <h2>Welcome to React</h2>
        <p>Java</p> */}
        {/* <Firstfuncomp></Firstfuncomp> */}
        {/* <Firstclasscomp/>
        <Propsdemo username="Gaurav" address="Ahmedabad"></Propsdemo> */}
        
       
        
        {/* <Childrenpropsdemo empid={111} name="Gaurav" isMarried={true}>
          <h1>children1</h1>
          <h2>children2</h2>
          <Firstclasscomp></Firstclasscomp>
        </Childrenpropsdemo>

        <Eventdemo></Eventdemo> 
        <hr/>
        <ImageDisplay/> */}

        {/* <DefaultandPropsType name="Gaurav" address="Ahmedabad" pincode={380058}/>
        <DefaultandPropsType  address="Ahmedabad" pincode={380058}/>
        <DefaultandPropsType   pincode="ahmedabad"/> */}


        {/* <Stateinfun/> */}
        {/* <CounterApp/> */}

        {/* <FetchTextBoxData name="Ram"/> */}

        {/* <Calculator/> */}

        {/* <Form1/> */}
        {/* <Form2/> */}
{/* 
        <button
          type="button"
          class="btn btn-primary" onClick={()=>setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        
        

        <ConditionalRendering isLog={isLoggedIn} username="Gaurav"></ConditionalRendering> */}
    </>


    // React.createElement("div",{className:"App"},React.createElement("h1",{},"Hello JavaScript"),
    // React.createElement("h2",{},"Welcome to React"),React.createElement("p",{},"Java"),)
    
  );
}

export default App;
