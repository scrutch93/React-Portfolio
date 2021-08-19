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
            <l className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className ='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        
                        </Link>
                </li>
            </div>
        </nav>
    )
}

export default Navbar
