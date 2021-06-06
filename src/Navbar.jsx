import React from 'react'
import Typography from '@material-ui/core/Typography';

const Navbar = (props) => {
    return (
        <div className="navbar">
      
             <Typography variant="h5" component="h2">
          {props.Heading}
           </Typography>
        </div>
    )
}

export default Navbar;
