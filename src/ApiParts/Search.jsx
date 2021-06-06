

import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function OutlinedCard() {
  

  return (
    
      <CardContent className='search'>
             
      <input type="search"
          placeholder='Search State'
      />
  <CardActions >
        <Button size="small">Search</Button>
      </CardActions>

      </CardContent>
    
  );
}