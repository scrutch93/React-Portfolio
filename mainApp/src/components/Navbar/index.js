import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./navstyle.css"

const Navbar = () => {
    return (
        <nav className= "navbar">
            <div className ="navbar"></div>
            <Link to="/" className="navbar -logo">
            Steven Crutchfield
            </Link>
        </nav>
    )
}

export default Navbar
