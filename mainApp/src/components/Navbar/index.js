import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./navstyle.css"

const Navbar = () => {
    const [click, setClick] =useState (false);

    const handleClick = ()=> setClick (!click);

    return (
        <nav className= "navbar">
            <div className ="navbar-container">
            <Link to="/" className="navbar -logo">
            Steven Crutchfield
            </Link>
            <div className ="menu-icon" onClick={handleClick}>
                <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className ='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   Projects
                    </Link>
                </li>
            </ul>
                
            </div>
        </nav>
    )
}

export default Navbar
