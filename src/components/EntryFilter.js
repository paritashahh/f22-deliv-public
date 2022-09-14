import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';
import { categories } from '../utils/categories';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; 

export default function EntryFilter({ entries }) {
   //keep track of which filters the user selects
   const filterArray = [];
   function checkValue(e) {
      var value = e.target.value;
      // if the filter is in place, add filter to filter list
      if (e.target.checked) {
         if (!filterArray.includes(value)) {
            filterArray.push(value);
         }
      }
      else {
         filterArray.splice(filterArray.indexOf(value), 1);
      }
    }
   return (   
      <div>
         <IconButton> </IconButton>
         <FormControl size="small" sx={{width: 150}}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={this}
               label="Category"
            >
               <FormGroup>
               {categories.map((category) => (
                  <FormControlLabel control={
                     <Checkbox value={category.name}></Checkbox>} 
                     label={category.name} 
                     onChange={(event) => checkValue(event)}
                  />))}
               </FormGroup>
            </Select>
         </FormControl>
      </div>
   );
}