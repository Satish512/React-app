import React from 'react';

const NavBar = ({totalCounters}) => {
  return ( 
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Total Counters : 
    <span className="badge badge-secondary badge-pill m-2">
      {totalCounters}
    </span>
    </a>  
    
  </nav> 
  );
}
 
export default NavBar;