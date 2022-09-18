
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Projects from './Projects'

const Domaincer = () => {
  const logoutfn = () => {
    localStorage.clear();
    window.location = '/login';
  }
  useEffect(() => {
    // Update the document title using the browser API
    if(!localStorage.getItem('token')){
      window.location = '/login';
    }
  });
  return (
   <div className='project_container'>
    <h2 style={{textAlign: "center"}}>Projects</h2>
    <button type="button" className='btn btn-danger' onClick={logoutfn}>logout</button>
    {
      localStorage.getItem('userType') === 'client' &&
    
    <Link to="/addProject"> 

    <button type="button" className="btn btn-primary" style={{marginBottom: "10px", marginLeft:'3px'}}> + Add Project </button>
    </Link> }

  

    
   <div className='content'>
   <Projects/>

   </div>
    
   </div>
   
  )
}

export default Domaincer