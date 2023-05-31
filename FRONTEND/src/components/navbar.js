import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <h2>GOOD<span className="health"><i>HEALTH</i></span></h2>
            </div>
            <div className="center">
                <Link to="/">HOME</Link>
                <Link to="/department" >DEPARTMENTS</Link>
                <Link to="/doctors" >DOCTORS</Link>
                <Link to="/contact" >CONTACT</Link>
            </div>

            <div className="right">
                <Link to="/contact">Make an appointment</Link>
            </div>

        </nav>
    )
}







