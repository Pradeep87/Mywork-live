import React from 'react';
import API from './ApiParts/API';
import WeatherApi from './WeatherApi/WeatherApi';
import './index.css';
import './css/Top.css';

import {
    
    Switch,
    Route,
  } from "react-router-dom";



const App=()=>{

return(
    <>  
    
   <WeatherApi/>  
   <API/>

     </>
);

}


export default App;