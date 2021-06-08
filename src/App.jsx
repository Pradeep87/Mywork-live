import React from 'react';
import API from './ApiParts/API';
import './index.css';
import './css/Top.css';
import Quot from './Quotes/Quotes';

import {Container} from 'react-bootstrap'

import 
{Tabs, Tab} from 'react-bootstrap';



const App=()=>{

return(
    <>  
  
  <Container>
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Covid-19 Update">
  <API/>
  </Tab>
  <Tab eventKey="profile" title="Random  Quotes">
  <Quot/>
  </Tab>
  <Tab eventKey="contact" title="next coming soon . .  ." disabled>
  </Tab>
</Tabs>  
        
  </Container>

     </>
);

}


export default App;