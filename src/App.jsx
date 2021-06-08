import React from 'react';
import API from './ApiParts/API';
import './index.css';
import './css/Top.css';
import Quot from './Quotes/Quotes';

import {Container} from 'react-bootstrap'
import Country from './country/Country' ;

import 
{Tabs, Tab} from 'react-bootstrap';



const App=()=>{

return(
    <>  
  
  <Container>
  <p className='font-weight-bold'>Click to visit</p>
  <Tabs className='font-weight-bold' defaultActiveKey="profile" id="uncontrolled-tab-example">

  <Tab  eventKey="home" title="Covid-19 Update">
  <API/>
  </Tab>
  <Tab eventKey="RandomQuotes" title="Random Quotes">
  <Quot/>
  </Tab>
  
  <Tab eventKey="CountriesPopulation" title="Countries Population" >
  <Country/>
  </Tab>
  
  
  
</Tabs>  
        
  </Container>

     </>
);

}


export default App;