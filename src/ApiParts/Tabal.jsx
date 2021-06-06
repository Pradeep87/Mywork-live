import React from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

export default function BasicTable(props) {




  return (

        <TableBody  >
         <TableCell align="center" className='Col' >{props.state}</TableCell>
            <TableCell align="center">{props.statecode}</TableCell>
          
            <TableCell align="center">{props.activeCase}</TableCell>
            <TableCell align="center">{props.confirmedCase}</TableCell>
                     
            <TableCell align="center">{props.Deaths}</TableCell>
            <TableCell align="center">{props.recovered}</TableCell>
           
        </TableBody>
         );
}