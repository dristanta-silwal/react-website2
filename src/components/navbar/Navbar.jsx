import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../logo.png";

import '../navbar/Navbar.css'


const Navbar = () => {
    const [isActive, setActive] = useState("true");
    const show = () => {
        setActive(!isActive);
    };
    return (
        <>
            <nav>
                <a href="/home"><img src={Logo} alt="Logo of Dristanta" /></a>
                <div className={`nav-links ${isActive ? "menu-close" : "menu-open"}`}>
                    <i className="fa fa-times" onClick={show}></i>
                    <ul>
                        <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link" to="/contact">Contact Me</NavLink></li>
                        <li><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink className="nav-link" to="/service">Service</NavLink></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={show}></i>
            </nav>
        </>
    )
}

export default Navbar