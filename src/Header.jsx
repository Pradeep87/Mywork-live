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
         <NavLink  to='/' exact className='link' >Weather Api</NavLink>   </li>

        <li  >
        <NavLink to='/covid-api'  className='link' >covid Api</NavLink></li> 
        </ul>
        
        </div>
      </>
    )
  }
  
  export default Header;
  