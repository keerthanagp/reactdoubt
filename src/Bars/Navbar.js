
import React from 'react'
import "../Bars/Bars.css"
import { Avatar, Badge, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';

function Navbar() {
  return (
    <div className='navbars'>   
     <div className='navsearch'>
        <TextField label="" id="outlined-size-normal" defaultValue="Search for..." />
        <SearchIcon/>
      </div>
<div className='badge'>
<Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
   
</div>
<div className='mailbox'>
<Avatar>K</Avatar>
</div>
</div>

  )
}

export default Navbar