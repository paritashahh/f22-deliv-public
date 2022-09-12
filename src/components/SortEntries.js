
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import { categories } from '../utils/categories';
import { addEntry, editEntry, deleteEntry } from '../utils/mutations';
import { SelectAll } from '@mui/icons-material';


         <FormControl fullWidth sx={{ "margin-top": 30 }}>
         <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={category}
               label="Category"
               onChange={(event) => setFilter(event.target.value)}
            >
               {categories.map((category) => (<MenuItem value={category.id}>{category.name}</MenuItem>))}
            </Select>
         </FormControl>