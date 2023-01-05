import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <>
        <nav className="navbar">
	   <div className="navbar-container">
	      <Link to="/" className="navbar-logo">
	         TEST <FontAwesomeIcon icon="fa-solid fa-rocket" />	
	      </Link>
	   </div>
	</nav> 
      </>
   );	
}

export default Navbar;
