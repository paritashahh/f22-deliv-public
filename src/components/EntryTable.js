import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EntryModal from './EntryModal';
import { getCategory } from '../utils/categories';
import React from 'react';
import QRCode from "qrcode.react";
import { useState } from 'react';

// Table component that displays entries on home screen
export default function EntryTable({ entries }) {
   
   const [data, setData] = useState(entr);
   const [order, setOrder] = useState("ASC");

   // function for sorting column by entry name
   const sorting = (col)=> {
      if (order === "ASC") {
         const sorted = entries.sort((a, b) => 
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
         );
         setData(sorted);
         setOrder("DSC");
      }
      if (order === "DSC") {
         const sorted = entries.sort((a, b) => 
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
         );
         setData(sorted);
         setOrder("ASC");
      }
   }
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Add to Clipboard</TableCell>
                  <TableCell onClick={()=> sorting("name")}><img src="/arrow.png" alt = "copy" width="20" center/>Name</TableCell>
                  <TableCell align="right">Link</TableCell>
                  <TableCell align="right">QRCode</TableCell>
                  <TableCell align="right">User</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Open</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {entries.map((entry) => (
                  <TableRow
                     key={entry.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell><Button onClick={() => navigator.clipboard.writeText(entry.link)}><img src="/clip.png" alt = "copy" width="30"/></Button></TableCell>
                     <TableCell component="th" scope="row">{entry.name}</TableCell>
                     <TableCell align="right"><Link href={entry.link}>{entry.link}</Link></TableCell>
                     <TableCell align="right"><QRCode value={entry.link} style={{ size: 50 }}/></TableCell>
                     <TableCell align="right">{entry.user}</TableCell>
                     <TableCell align="right">{getCategory(entry.category).name}</TableCell>
                     <TableCell sx={{ "padding-top": 0, "padding-bottom": 0 }} align="right">
                        <EntryModal entry={entry} type="edit" />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}



