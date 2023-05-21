import React from "react"
import { Link, useNavigate } from 'react-router-dom';
const Nav =()=>{
  //this is to check user obj is present or not
  const auth = localStorage.getItem('user');
  // logout button 
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div className="sidebar">
    
    <div className='nav-div'>
       { auth?
        <ul className='nav-ul'>
        
           <li><Link to="/home">Home</Link></li>
           
           <li><Link to="/addcategory">Category</Link></li>
           <li><Link to="/addproduct">Product</Link></li>
           <li><Link to="/products">Products List</Link></li>
           <li><Link onClick={logout} to="/signup">logout ({JSON.parse(auth).name})</Link></li>
        </ul>
          :
        <ul className='nav-ul nav-right'>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
       }
    </div>
    </div>
  )
}
export default Nav;