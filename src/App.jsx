import React from 'react';
import API from './ApiParts/API';
import WeatherApi from './WeatherApi/WeatherApi';
import './index.css';
import './css/Top.css';
import Header from './Header';

import {
    
    Switch,
    Route,
  } from "react-router-dom";



const App=()=>{

return(
    <>  
    
   
   

          <Switch>
          <Route exact path="/">
          <API/>
          </Route>
          <Route exact path="/weatherapi">
             <WeatherApi/>
          </Route>
          
        </Switch>

 
    

  
  <Header className='nav'/> 
     
     
         
 
     </>
);

}


export default App;