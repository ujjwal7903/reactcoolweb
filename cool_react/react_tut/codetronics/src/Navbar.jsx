import React from "react";
import { NavLink } from "react-router-dom";
import web5 from "../src/images/banner3.jpg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo_left">
                    <NavLink to="/">CODEtronics</NavLink>
                </div>
                <div className="logo_right">
                    <ul className="menu-list">
                        <div className="icon cancel-btn">
                            <i className="fas fa-times"></i>
                        </div>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/resource">Resources</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/member">Members</NavLink></li>
                    </ul>
                    <div className="icon menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;