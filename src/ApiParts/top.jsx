import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../css/Top.css';



export default function SimpleCard(props) {


  return (
    <Card  className='Card'>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         Active Case : {props.activeCase}
        </Typography>
        <Typography variant="h5" component="h2">
        Confirmed Case : {props.confirmedCase}
        </Typography>
      
        <Typography variant="h5" component="h2">
        Deaths : {props.Deaths}
        </Typography>
      
        <Typography variant="h5" component="h2">
        Recovered : {props.recovered}
        </Typography>
      
        <Typography variant="h5" component="h2">
        State : {props.state}
        </Typography>
      
        <Typography variant="h5" component="h2">
        Statecode : {props.statecode}
        </Typography>
      
      

      </CardContent>
      
    </Card>
  );
}



