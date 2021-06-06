import React, { useEffect, useState } from 'react';

import BasicTable from './Tabal';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Navbar from '../Navbar';
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
console.log(Case);
    fatchApi();
},[Case]);

return(<>


<Navbar
    Heading=' All India Statewise Covid-19 Update'
/>

<Search/>
{ !Case ? ( 
    <p> no data found </p> ) : ( 
<div className="tabal">


<TableContainer component={Paper}  >
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