import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
       
      <ul class="nav flex-column">
  <li class="nav-item">
    <NavLink class="nav-link " aria-current="page" to='/' className="ms-3 text-decoration-none"
    style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "red",
      backgroundColor: isActive ? "yellow" : "",
    };
  }}>props</NavLink>

  </li>
  <li class="nav-item">
    <NavLink class="nav-link" to='/state' className="ms-3 text-decoration-none"
    style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "red",
      backgroundColor: isActive ? "yellow" : "",
    };
  }}>state</NavLink>
  </li>

  <li class="nav-item">
    <Link class="nav-link" to='/event'>event</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/condition'>conditional rendering</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/form'>form</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/product/form'>Product Form</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/list'>ListRendering</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/products'>Products</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/products/card'>Products in card</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/css'>CSS</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/rb'>React Bootstrap Form</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/validations'>Form Validations</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/reacthookform'>React Hook Form Validations</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/lifting'>Lifting the state up</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to='/random'>useCallback,useEffect and useRef demo</Link>
  </li>
  
  
</ul>
    </>
  )
}

export default Sidebar
