import React, { useEffect, useState } from 'react';

import BasicTable from './Tabal';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Search from './Search';
import '../css/Top.css'

const Ntabel=(val)=>{
   return(<>

<BasicTable
    activeCase={val.active}
confirmedCase={val.confirmed}
Deaths={val.deaths}
recovered={val.recovered}
state={val.state}
statecode={val.statecode}
/>


   </>);

}



const API=()=>{

    const [Case,SetCase]=useState();

useEffect(()=>{
const fatchApi=async ()=>{
   const url=`https://api.covid19india.org/data.json`;
    const response= await fetch(url);
    const data=await response.json();
    SetCase(data.statewise);

}

    fatchApi();
},[Case]);

return(<>

<Search/>

{ !Case ? ( 
    <h3 className='font-weight-bold mt-5' >no data found </h3> ) : ( 
<div className="tabal">


<TableContainer component={Paper}  >
<div className="ti">
<h3>Covid Update</h3></div>
      <Table aria-label="simple table">
       
       
<TableHead>
          <TableRow>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">State Code</TableCell>         
            <TableCell align="center">Active Case</TableCell>
            <TableCell align="center">Confirmed Case</TableCell>
            <TableCell align="center">Deaths</TableCell>
            <TableCell align="center">Recovered</TableCell>
          
          </TableRow>
        </TableHead>

{Case.map(Ntabel)}

</Table>
    </TableContainer>

    

</div>
)}


</>);
}

export default API;