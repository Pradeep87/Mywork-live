import axios from "axios";
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const Train= () => {
    const [Search,setSearch]=useState("India");
    const [Country,setCountry]=useState();

useEffect(() => {
 
    const GetData=()=>{

        const options = {
            method: 'GET',
            url: 'https://world-population.p.rapidapi.com/population',
            params: {country_name:Search},
            headers: {
              'x-rapidapi-key': '7062bb3329msha3c2aea2ea2fe26p16d096jsn0cb871e1ba53',
              'x-rapidapi-host': 'world-population.p.rapidapi.com'
            }
          };
          axios.request(options).then(function (response) {
              setCountry(response.data.body);
          }).catch(function (error) {
              console.error(error);
          }); console.log(Country);
          
    }


    GetData();
   },[Search, Country]);
    return (
        <>
  
<Row> 
<Col>
{!Country ? (<h3 className='font-weight-bold mt-5' >no data found </h3>) : (
    <>
    <Card className='mt-5' >
    <div className="mx-auto mt-5">
    <h3>enter country name </h3>
    <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Control type="text" 
    placeholder="Enter Country name "
   onChange={(event)=>{setSearch(event.target.value)}}
     />
  </Form.Group>
  
</Form>
</div>
  <Card.Body className='mx-auto'>
  <p>{Search}</p>
  <p>Country name : {Country.country_name}</p>
  <p>Population : {Country.population}</p>
  <p>Ranking :{Country.ranking}</p>
  <p>World Share {Country.world_share}</p>
  </Card.Body>
  <div className='mx-auto ml-3 bg-info p-3'>
  <h3 >Note:</h3>
  <p> Country Name frist letter must be Capital letter <br/>
  After enter the country name wait a movement for update
  </p> </div>
</Card>
  
</>
)}
   
     </Col>
</Row>

        </>
    )
}

export default Train;




