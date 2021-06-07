import axios from "axios";
import Button from '@material-ui/core/Button';

import React, {useEffect, useState } from 'react';
import { Row, Col} from 'react-bootstrap'

const Wapi = () => {
    const [quot,setquot]=useState();
    const [count,setcount]=useState(1);
useEffect(() => {
    

  
const options = {
    method: 'GET',
    url: 'https://shayshay.p.rapidapi.com/random',
    params: {limit: '20'},
    headers: {
      'x-rapidapi-key': '7062bb3329msha3c2aea2ea2fe26p16d096jsn0cb871e1ba53',
      'x-rapidapi-host': 'shayshay.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      setquot(response.data.quotes[0] );
   
     
  }).catch(function (error) {
      console.error(error);
  });

    return () => {
       
    }
}, [count]);
    return (
        <>
            
  <Row>
    <Col className='col-md-8 mx-auto'>
    <div className="bne mt-5 ">
<Button variant="contained"
 color="primary"
 onClick={()=>setcount(count+1)}
 >
update
</Button>

<Button variant="contained"
 color="primary" >
{count}
</Button>
</div>
    { !quot ?(<p>no internrt </p>):(

        
    <div className='con p-5'>
    <div className="quot">
        <h3> {quot}</h3>
    </div>
    
</div>
    )}
    
    </Col>
  </Row>
        </>
    )
}

export default Wapi




