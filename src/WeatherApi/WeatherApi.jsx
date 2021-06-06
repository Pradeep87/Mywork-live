import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Navbar from '../Navbar';


const WeatherApi = () => {
    
    const [search,setsearch]=useState('delhi');
const [City,Setcity]=useState(null);
useEffect( ()=>{
 
    const fatchApi= async ()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=143eff6fa2ce3bfa844cdbee4d4789d4`;
          const response=await fetch(url);
          const data=await response.json();
        Setcity(data.main);  
    }
    fatchApi();
 
},[search])



    return (
        <>
        <Navbar
            Heading='Search Temprature API'
        />

        <Card className='WetherCard' >
            <CardContent>
                <Typography variant="h5" component="h2">
                    <div className='input2'>
                    <p>Enter any Location</p> 
                    <input type='text'
                         id='state'
                         value={search}
                         onChange={(event)=>{ setsearch(event.target.value);  }}
                    /> </div>
                </Typography>

            </CardContent>
        <CardContent>
            
        { !City ? (<p>data not found</p>) : (
                    <div className="content">
                    <Typography variant="h3" component="h2">
               <LocationOnIcon fontSize="large" />
                 {search}
                </Typography>

                <Typography variant="h5" component="h2">
            Temp    {City.temp}  °Cel

           
                </Typography>
                
                <Typography variant="h6" >
                <p>  Min {City.temp_min}°Cel || Max {City.temp_max}°Cel</p>
                </Typography>
                    </div>
                )}
               
        </CardContent>

        </Card>
            </>
    )
}

export default WeatherApi
