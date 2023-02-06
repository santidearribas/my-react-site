import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function Navbar() {
   const [click, setClick] = useState(false); // Sets state of click to false
   const [button, setButton] = useState(true); // Sets state of button to true
   
   const handleClick = () => setClick(!click); // Anonymous function that inverts click state
   const closeMobileMenu = () => setClick(false);

   const showButton = () => { // Display butttons depending on window size
	if(window.innerWidth <= 960) {
		setButton(false);
	} else {
		setButton(true);
	}
   };

   useEffect(() => {
		showButton()
   }); // Stop SIGN UP button from reappearing in minimised mode when page is refreshed

   window.addEventListener('resize', showButton); // When you pass through resize - invoke showButton
 
   return (
      <>
       <nav className="navbar">
	   <div className="navbar-container">
	      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
	         <i className="fa-solid fa-rocket"></i>	
	      </Link>
		  <div className='menu-icon' onClick={handleClick}> {/* onClick event uses handleClick function */}
			<i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/* Update click to swap between these two */}
		  </div>
		  <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* Make nav menu appear and dissapear */}
		     <li className='nav-item'>
				<Link to='/' className='nav-links' onClick={closeMobileMenu}>
					Home
				</Link>
			 </li>
			 <li className='nav-item'>
				<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
					Services
				</Link>
			 </li>
			 <li className='nav-item'>
				<Link to='/products' className='nav-links' onClick={closeMobileMenu}>
					Products
				</Link>
			 </li>
			 <li className='nav-item'>
				<Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
					Sign Up
				</Link>
			 </li>
		  </ul>
		  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} {/* Set button to Button component and SIGN UP as children */}
	   </div>
	</nav> 
      </>
   );	
}

export default Navbar;