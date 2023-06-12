import React from 'react';
import { SidebarData } from './SidebarData';
import "../Bars.css"
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Sidebar() {
 
  return (
    
    <div className='fullside'>
        <h2>SB Admin</h2>
        {SidebarData.map((val,idx)=>
        (<div className='totalsidenav'> 
        <Link to={val.url} >
          <div className='navs'>
            <div className='icons'>{val.icons} </div>
        <div className='title'>{val.title}</div>
        </div>
        </Link> 
        </div>
        ))}
       
    </div>
    
  )

}

export default Sidebar