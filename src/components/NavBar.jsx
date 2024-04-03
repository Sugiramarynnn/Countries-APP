import React from 'react'
import Logoicon from './Logoicon';
import Mobilelogo from './Mobilelogo';
import MenuIcon from './MenuIcon';


const NavBar = () => {
  return (
    
    <nav className="navbar flex justify-between items-center text-slate-50 px-40 py-10">
      <ul className='flex items-center'>
      <li>
        <a href="#">
          <Logoicon />
          <Mobilelogo />
        </a>
      </li>
    </ul>

      <div className='flex items-center'>
      <ul className="nav-link md:flex hidden space-x-4">
        <li>
          <a href="#">Countries</a>
        </li>
        <li>
          <a href="#">continents</a>
        </li>
        <li>
          <a href="#">Regions</a>
        </li>
      </ul>
      <button className="md:hidden">
        <MenuIcon className= 'text-white text-2xl font-bold'/>

      </button>
      
      
      </div>
      
    </nav>
  );
  
 
}

export default NavBar