import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import NavLogo from "../assets/images/rebirth-logo.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth) {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth) {
            setDropdown(false);
        }
    };

    return (
        <>
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={NavLogo} alt="landwey-logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                Our Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <span className="nav-links">
                                Services <i className="fas fa-caret-down" />
                            </span>
                            {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
                        </li>
                        <li>
                            <Link to="/sign-in" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign In
                                <i className="profile-icon fas fa-user"></i>
                            </Link>
                        </li>
                    </ul>
                    <Button />
                </nav>
            </div>
        </>
    );
}

export default Navbar;
