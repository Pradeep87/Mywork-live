import React from 'react';
import API from './ApiParts/API';
import './index.css';
import './css/Top.css';
import Quot from './Quotes/Quotes';
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
<API/>
  <Switch>
  <Route exact path='/' component={API}/>
  <Route exact path='/quotes' component={Quot}/>   
        </Switch>

</Container>

     
  
 

     </>
);

}


export default App;