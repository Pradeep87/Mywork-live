import React from 'react';

import {
  NavLink
  } from "react-router-dom";

  
  
  const Header = () => {
    
    return (
      <>
        <div className='Tab'> 
        
        <ul>
        
        <li>
         <NavLink  to='/' exact className='link' > covid Api</NavLink>   </li>

        <li  >
        <NavLink to='/weatherapi'  className='link' > Weather Api</NavLink></li> 
        </ul>
        
        </div>
      </>
    )
  }
  
  export default Header;
  