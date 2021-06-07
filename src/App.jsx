import React from 'react';
import API from './ApiParts/API';
import './index.css';
import './css/Top.css';
import Wapp from './Quotes/Quotes';
import NavTwo from './NavTwo';
import {Container} from 'react-bootstrap'


import {
    
    Switch,
    Route,
  } from "react-router-dom";



const App=()=>{

return(
    <>  
  
  <Container>
  <NavTwo/>

  <Switch>
          <Route exact path="/">
  <API/>

          </Route>
          <Route exact path="/covidapi">
          <Wapp/>
          
          </Route>
          
        </Switch>

</Container>

     
  
 

     </>
);

}


export default App;